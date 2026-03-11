import { beforeEach, describe, it, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import SignalList, { calcScore } from './SignalList';
import { TrafficLight } from './types';

const sliderTransforms: Record<TrafficLight, string> = {
  red: 'translateX(0.1rem)',
  amber: 'translateX(1.7rem)',
  green: 'translateX(3.3rem)',
};

const getIconSlider = (listItem: HTMLElement) => {
  const marginRight = listItem.querySelector('.margin-right--sm');
  const iconGroup = marginRight?.firstElementChild as HTMLElement | null;
  const slider = iconGroup?.firstElementChild as HTMLElement | null;

  if (!slider) {
    throw new Error('Icon slider element not found.');
  }

  return slider;
};
describe('SignalList', () => {
  const mockTitle = 'Test Title';
  const mockDescription = 'Test Description';
  // Default initial state for all items is 'amber' as per component logic
  // nextState cycles: 'amber' -> 'green' -> 'red' -> 'amber'

  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders the correct number of items and initial visual states', () => {
    const mockItems = ['item1', 'item2', 'item3'];
    const mockOnChange = jest.fn();

    render(
      <SignalList
        items={mockItems}
        onChange={mockOnChange}
        title={mockTitle}
        description={mockDescription}
        section="map"
        storageId="test-signal"
      />
    );

    const renderedItems = screen.getAllByRole('listitem');
    expect(renderedItems.length).toBe(mockItems.length);

    // Check initial visual state (all should be amber)
    renderedItems.forEach((item) => {
      const iconSlider = getIconSlider(item);
      expect(iconSlider).toHaveStyle({transform: sliderTransforms.amber});
    });
    // Initial score (all amber)
    const initialExpectedScore = calcScore(Array(mockItems.length).fill('amber'));
    expect(mockOnChange).toHaveBeenCalledWith(
      initialExpectedScore,
      Array(mockItems.length).fill('amber'),
      false,
    );
  });

  it('updates item state on click, calls onScoreChange, and reflects visual changes', () => {
    const mockItems = ['item A', 'item B'];
    const mockOnChange = jest.fn();

    // Initial states are 'amber', 'amber'
    // Initial score: calcScore(['amber', 'amber']) which is (50+50)/2 = 50
    const initialExpectedScore = calcScore(['amber', 'amber']);

    render(
      <SignalList
        items={mockItems}
        onChange={mockOnChange}
        title={mockTitle}
        description={mockDescription}
        section="map"
        storageId="test-signal-update"
      />
    );
    // useEffect in SignalList calls onScoreChange on mount
    expect(mockOnChange).toHaveBeenCalledWith(
      initialExpectedScore,
      ['amber', 'amber'],
      false,
    );

    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(mockItems.length);

    let iconSliderA = getIconSlider(listItems[0]);
    let iconSliderB = getIconSlider(listItems[1]);

    // Initial visual state check
    expect(iconSliderA).toHaveStyle({transform: sliderTransforms.amber});
    expect(iconSliderB).toHaveStyle({transform: sliderTransforms.amber});

    // 1. Click item A: 'amber' -> 'green'. States: ['green', 'amber']
    fireEvent.click(listItems[0]);
    let expectedStates: TrafficLight[] = ['green', 'amber'];
    let expectedScore = calcScore(expectedStates); // (100+50)/2 = 75
    expect(mockOnChange).toHaveBeenLastCalledWith(expectedScore, expectedStates, true);
    iconSliderA = getIconSlider(listItems[0]);
    expect(iconSliderA).toHaveStyle({transform: sliderTransforms.green});

    // 2. Click item A again: 'green' -> 'red'. States: ['red', 'amber']
    fireEvent.click(listItems[0]);
    expectedStates = ['red', 'amber'];
    expectedScore = calcScore(expectedStates); // (0+50)/2 = 25
    expect(mockOnChange).toHaveBeenLastCalledWith(expectedScore, expectedStates, true);
    iconSliderA = getIconSlider(listItems[0]);
    expect(iconSliderA).toHaveStyle({transform: sliderTransforms.red});

    // 3. Click item B: 'amber' -> 'green'. States: ['red', 'green']
    fireEvent.click(listItems[1]);
    expectedStates = ['red', 'green'];
    expectedScore = calcScore(expectedStates); // (0+100)/2 = 50
    expect(mockOnChange).toHaveBeenLastCalledWith(expectedScore, expectedStates, true);
    iconSliderB = getIconSlider(listItems[1]);
    expect(iconSliderB).toHaveStyle({transform: sliderTransforms.green});


    // 4. Click item A again: 'red' -> 'amber'. States: ['amber', 'green']
    fireEvent.click(listItems[0]);
    expectedStates = ['amber', 'green'];
    expectedScore = calcScore(expectedStates); // (50+100)/2 = 75
    expect(mockOnChange).toHaveBeenLastCalledWith(expectedScore, expectedStates, true);
    iconSliderA = getIconSlider(listItems[0]);
    expect(iconSliderA).toHaveStyle({transform: sliderTransforms.amber});
  });

  it('calls onScoreChange prop correctly over multiple clicks', () => {
    const mockItems = ['item X', 'item Y']; // Using 2 items for simplicity
    const mockOnChange = jest.fn();
    // Initial states: ['amber', 'amber'], Score: (50+50)/2 = 50
    const initialExpectedScore = calcScore(['amber', 'amber']);

    render(
      <SignalList
        items={mockItems}
        onChange={mockOnChange}
        title={mockTitle}
        description={mockDescription}
        section="map"
        storageId="test-signal-multi"
      />
    );
    // Called on mount
    expect(mockOnChange).toHaveBeenCalledWith(initialExpectedScore, ['amber', 'amber'], false);
    let timesCalled = 1;

    const listItems = screen.getAllByRole('listitem');

    // Click item X: 'amber' -> 'green'. States: ['green', 'amber']. Score: (100+50)/2 = 75
    fireEvent.click(listItems[0]);
    timesCalled++;
    expect(mockOnChange).toHaveBeenCalledTimes(timesCalled);
    expect(mockOnChange).toHaveBeenLastCalledWith(
      calcScore(['green', 'amber']),
      ['green', 'amber'],
      true,
    );

    // Click item Y: 'amber' -> 'green'. States: ['green', 'green']. Score: (100+100)/2 = 100
    fireEvent.click(listItems[1]);
    timesCalled++;
    expect(mockOnChange).toHaveBeenCalledTimes(timesCalled);
    expect(mockOnChange).toHaveBeenLastCalledWith(
      calcScore(['green', 'green']),
      ['green', 'green'],
      true,
    );

    // Click item X again: 'green' -> 'red'. States: ['red', 'green']. Score: (0+100)/2 = 50
    fireEvent.click(listItems[0]);
    timesCalled++;
    expect(mockOnChange).toHaveBeenCalledTimes(timesCalled);
    expect(mockOnChange).toHaveBeenLastCalledWith(
      calcScore(['red', 'green']),
      ['red', 'green'],
      true,
    );

    // Click item Y again: 'green' -> 'red'. States: ['red', 'red']. Score: (0+0)/2 = 0
    fireEvent.click(listItems[1]);
    timesCalled++;
    expect(mockOnChange).toHaveBeenCalledTimes(timesCalled);
    expect(mockOnChange).toHaveBeenLastCalledWith(
      calcScore(['red', 'red']),
      ['red', 'red'],
      true,
    );

    // Click item X again: 'red' -> 'amber'. States: ['amber', 'red']. Score: (50+0)/2 = 25
    fireEvent.click(listItems[0]);
    timesCalled++;
    expect(mockOnChange).toHaveBeenCalledTimes(timesCalled);
    expect(mockOnChange).toHaveBeenLastCalledWith(
      calcScore(['amber', 'red']),
      ['amber', 'red'],
      true,
    );
  });
});
