import React from 'react';

interface ResultsProps {
  mapScore: number; // Strategic fit
  readinessScore: number; // Ability to execute
}

const formatLevel = (level: 'Strong' | 'Weak'): string =>
  level === 'Strong' ? '強い' : '弱い';

// Export for testing - This is the one to keep
export const getLevelFromScore = (score: number): 'Strong' | 'Weak' =>
  score >= 66 ? 'Strong' : 'Weak';

export const summaryText = (mapLevel: string, readinessLevel: string): string => {
  if (mapLevel === 'Strong' && readinessLevel === 'Strong') {
    return '自信を持って進めて構いません。この戦略は文脈によく適合しており、実行準備も整っています。';
  } else if (mapLevel === 'Strong') {
    return '戦略適合度は高いので、実行準備を整えてから進めるのが妥当です。';
  } else if (readinessLevel === 'Strong') {
    return '実行力はありますが、この文脈で本当に最適な戦略かは再確認した方がよいです。';
  } else {
    return '別の戦略を検討するか、大きな不足を埋めてから進めることを勧めます。';
  }
};

// Export for testing
export const positionScore = (raw: number): number => {
  const clamped = Math.max(0, Math.min(100, raw));
  const shifted = Math.max(0, clamped - 33);
  return Math.min(100, (shifted / 67) * 100);
};

const Results: React.FC<ResultsProps> = ({ mapScore, readinessScore }) => {
  const mapLevel = getLevelFromScore(mapScore);
  const readinessLevel = getLevelFromScore(readinessScore);
  const x = positionScore(mapScore);
  const y = 100 - positionScore(readinessScore); // invert y to match quadrant orientation

  return (
    <div>
      <p>
        戦略適合度: <strong>{formatLevel(mapLevel)}</strong>。
        実行力: <strong>{formatLevel(readinessLevel)}</strong>。
      </p>
      <p className='theme-admonition theme-admonition-info alert alert--info' data-testid="results-summary-alert">
        <strong>推奨</strong><br />
        {summaryText(mapLevel, readinessLevel)}
      </p>
      <svg viewBox="-20 -20 140 140" width="100%" style={{ background: 'var(--ifm-background-color)', maxWidth: '500px' }}>
        {/* Quadrant borders */}
        <rect x="0" y="0" width="50" height="50" fill="none" stroke="var(--ifm-color-emphasis-300)" strokeWidth="0.5" />
        <rect x="50" y="0" width="50" height="50" fill="none" stroke="var(--ifm-color-emphasis-300)" strokeWidth="0.5" />
        <rect x="0" y="50" width="50" height="50" fill="none" stroke="var(--ifm-color-emphasis-300)" strokeWidth="0.5" />
        <rect x="50" y="50" width="50" height="50" fill="none" stroke="var(--ifm-color-emphasis-300)" strokeWidth="0.5" />

        <circle cx={x} cy={y} r="2.5" fill="var(--ifm-color-primary)" data-testid="results-svg-plot-dot" />

        {/* Axis Labels */}
        <text x="0" y="108" fontSize="6" textAnchor="start" fill="var(--ifm-color-content)">低</text>
        <text x="100" y="108" fontSize="6" textAnchor="end" fill="var(--ifm-color-content)">高</text>
        <text x="50" y="114" fontSize="6" textAnchor="middle" fill="var(--ifm-color-content)">戦略適合度</text>

        <text x="-6" y="17" transform="rotate(-90 -6 17)" fontSize="6" textAnchor="start" fill="var(--ifm-color-content)">高</text>
        <text x="-6" y="85" transform="rotate(-90 -6 85)" fontSize="6" textAnchor="end" fill="var(--ifm-color-content)">低</text>
        <text x="-14" y="50" transform="rotate(-90 -14 50)" fontSize="6" textAnchor="middle" fill="var(--ifm-color-content)">実行力</text>
      </svg>
    </div>
  );
};

export default Results;
