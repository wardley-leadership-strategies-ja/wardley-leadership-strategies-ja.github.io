import React, {useMemo, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './strategy-navigator.module.css';
import type {StrategyProfile} from '@site/src/data/strategyNavigator';
import {strategyProfiles} from '@site/src/data/strategyNavigator';

type ActiveFilter = {type: 'goal' | 'stage' | 'pressure'; value: string};

type StrategyMatch = StrategyProfile & {
  matchedGoals: string[];
  matchedStages: string[];
  matchedPressures: string[];
  matchScore: number;
  matchesSearch: boolean;
};

const translateEffortLevel = (value: StrategyProfile['effortLevel']): string => {
  switch (value) {
    case 'Lean Experiment':
      return '小さな実験';
    case 'Cross-Functional Initiative':
      return '部門横断イニシアチブ';
    case 'Enterprise Transformation':
      return '全社変革';
    default:
      return value;
  }
};

const translateTimeHorizon = (value: StrategyProfile['timeHorizon']): string => {
  switch (value) {
    case 'Fast impact':
      return '短期で効果';
    case 'Medium-term shaping':
      return '中期の形成';
    case 'Long-term positioning':
      return '長期の布石';
    default:
      return value;
  }
};

const uniqueSorted = (values: string[]): string[] =>
  Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));

const getFitRating = (
  score: number,
  hasActiveFilters: boolean,
): {label: string; tone: 'neutral' | 'low' | 'medium' | 'high'} => {
  if (!hasActiveFilters) {
    return {label: 'まずは確認', tone: 'neutral'};
  }

  if (score >= 5) {
    return {label: '高適合', tone: 'high'};
  }

  if (score >= 3) {
    return {label: '適合度あり', tone: 'medium'};
  }

  return {label: '文脈次第', tone: 'low'};
};

const comparisonRows: {label: string; render: (profile: StrategyProfile) => React.ReactNode}[] = [
  {
    label: '概要',
    render: (profile) => profile.summary,
  },
  {
    label: '前進させる目標',
    render: (profile) => (
      <ul className={styles.comparisonList}>
        {profile.goals.map((goal) => (
          <li key={goal}>{goal}</li>
        ))}
      </ul>
    ),
  },
  {
    label: '重視する進化段階',
    render: (profile) => (
      <div className={styles.tagRow}>
        {profile.stages.map((stage) => (
          <span key={stage} className={styles.tag}>
            {stage}
          </span>
        ))}
      </div>
    ),
  },
  {
    label: '見えているシグナル',
    render: (profile) => (
      <ul className={styles.comparisonList}>
        {profile.quickSignals.map((signal) => (
          <li key={signal}>{signal}</li>
        ))}
      </ul>
    ),
  },
  {
    label: '最初の一手',
    render: (profile) => (
      <ul className={styles.comparisonList}>
        {profile.momentumMoves.map((move) => (
          <li key={move}>{move}</li>
        ))}
      </ul>
    ),
  },
  {
    label: '注意点',
    render: (profile) => (
      <ul className={styles.comparisonList}>
        {profile.watchOuts.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  },
  {
    label: '求められるリーダーシップ',
    render: (profile) => (
      <ul className={styles.comparisonList}>
        {profile.leadershipFocus.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ),
  },
  {
    label: '必要な負荷',
    render: (profile) => translateEffortLevel(profile.effortLevel),
  },
  {
    label: '時間軸',
    render: (profile) => translateTimeHorizon(profile.timeHorizon),
  },
];

const StrategyNavigator = (): React.ReactElement => {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [selectedPressures, setSelectedPressures] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [comparison, setComparison] = useState<string[]>([]);

  const goalOptions = useMemo(
    () => uniqueSorted(strategyProfiles.flatMap((profile) => profile.goals)),
    [],
  );
  const stageOptions = useMemo(
    () => uniqueSorted(strategyProfiles.flatMap((profile) => profile.stages)),
    [],
  );
  const pressureOptions = useMemo(
    () => uniqueSorted(strategyProfiles.flatMap((profile) => profile.pressures)),
    [],
  );

  const hasActiveFilters =
    selectedGoals.length > 0 ||
    selectedStages.length > 0 ||
    selectedPressures.length > 0 ||
    searchTerm.trim().length > 0;

  const filteredStrategies = useMemo<StrategyMatch[]>(() => {
    const lowerSearch = searchTerm.trim().toLowerCase();

    return strategyProfiles
      .map((profile) => {
        const matchedGoals = profile.goals.filter((goal) =>
          selectedGoals.includes(goal),
        );
        const matchedStages = profile.stages.filter((stage) =>
          selectedStages.includes(stage),
        );
        const matchedPressures = profile.pressures.filter((pressure) =>
          selectedPressures.includes(pressure),
        );

        const searchCorpus = [
          profile.title,
          profile.summary,
          ...profile.goals,
          ...profile.stages,
          ...profile.pressures,
          ...profile.leadershipFocus,
          ...profile.quickSignals,
          ...profile.momentumMoves,
          ...profile.watchOuts,
        ]
          .join(' ')
          .toLowerCase();

        const matchesSearch = lowerSearch.length === 0 ||
          searchCorpus.includes(lowerSearch);

        const matchScore =
          matchedGoals.length * 2 +
          matchedStages.length +
          matchedPressures.length +
          (lowerSearch.length > 0 && matchesSearch ? 1 : 0);

        return {
          ...profile,
          matchedGoals,
          matchedStages,
          matchedPressures,
          matchesSearch,
          matchScore,
        };
      })
      .filter((profile) => {
        if (selectedGoals.length > 0 && profile.matchedGoals.length === 0) {
          return false;
        }
        if (selectedStages.length > 0 && profile.matchedStages.length === 0) {
          return false;
        }
        if (
          selectedPressures.length > 0 &&
          profile.matchedPressures.length === 0
        ) {
          return false;
        }
        if (lowerSearch.length > 0 && !profile.matchesSearch) {
          return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (b.matchScore !== a.matchScore) {
          return b.matchScore - a.matchScore;
        }
        return a.title.localeCompare(b.title);
      });
  }, [searchTerm, selectedGoals, selectedPressures, selectedStages]);

  const activeFilters = useMemo<ActiveFilter[]>(
    () => [
      ...selectedGoals.map((value) => ({type: 'goal', value} as ActiveFilter)),
      ...selectedStages.map((value) => ({type: 'stage', value} as ActiveFilter)),
      ...selectedPressures.map((value) => ({type: 'pressure', value} as ActiveFilter)),
    ],
    [selectedGoals, selectedPressures, selectedStages],
  );

  const toggleValue = (
    value: string,
    setState: React.Dispatch<React.SetStateAction<string[]>>,
  ) => {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const clearFilter = (filter: ActiveFilter) => {
    switch (filter.type) {
      case 'goal':
        setSelectedGoals((prev) => prev.filter((value) => value !== filter.value));
        break;
      case 'stage':
        setSelectedStages((prev) =>
          prev.filter((value) => value !== filter.value),
        );
        break;
      case 'pressure':
        setSelectedPressures((prev) =>
          prev.filter((value) => value !== filter.value),
        );
        break;
      default:
        break;
    }
  };

  const resetFilters = () => {
    setSelectedGoals([]);
    setSelectedStages([]);
    setSelectedPressures([]);
    setSearchTerm('');
  };

  const toggleComparison = (slug: string) => {
    setComparison((prev) => {
      if (prev.includes(slug)) {
        return prev.filter((item) => item !== slug);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, slug];
    });
  };

  const comparisonProfiles = useMemo(
    () =>
      comparison
        .map((slug) => strategyProfiles.find((profile) => profile.slug === slug))
        .filter((profile): profile is StrategyProfile => Boolean(profile)),
    [comparison],
  );

  return (
    <Layout
      title="戦略ナビゲーター"
      description="目標、ランドスケープのシグナル、組織的圧力から Wardley 戦略を絞り込みます。"
    >
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.heroTitle}>戦略ナビゲーター</h1>
          <p className={styles.heroSubtitle}>
            Wardley Map から見えているシグナルをもとに、状況に合うリーダーシップ戦略を絞り込みます。
            目標、進化段階、プレッシャーを組み合わせて候補を比較できます。
          </p>
          <ul className={styles.heroChecklist}>
            <li>まずは加速したい成果を選ぶ。</li>
            <li>次に進化段階や感じている緊張を加える。</li>
            <li>提案された戦略を見て、有力候補を比較する。</li>
          </ul>
        </div>
      </section>

      <section className={styles.filters} aria-labelledby="navigator-filters">
        <div className="container">
          <div className={styles.filterHeader}>
            <h2 id="navigator-filters">条件を調整する</h2>
            <button
              type="button"
              className={styles.resetButton}
              onClick={resetFilters}
              disabled={!hasActiveFilters}
            >
              すべての条件をリセット
            </button>
          </div>

          <div className={styles.filterGrid}>
            <div className={styles.filterGroup}>
              <h3>戦略目標</h3>
              <div className={styles.pillGroup}>
                {goalOptions.map((goal) => (
                  <button
                    key={goal}
                    type="button"
                    className={clsx(styles.pill, {
                      [styles.pillActive]: selectedGoals.includes(goal),
                    })}
                    onClick={() => toggleValue(goal, setSelectedGoals)}
                  >
                    {goal}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3>進化段階</h3>
              <div className={styles.pillGroup}>
                {stageOptions.map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    className={clsx(styles.pill, {
                      [styles.pillActive]: selectedStages.includes(stage),
                    })}
                    onClick={() => toggleValue(stage, setSelectedStages)}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.filterGroup}>
              <h3>プレッシャー</h3>
              <div className={styles.pillGroup}>
                {pressureOptions.map((pressure) => (
                  <button
                    key={pressure}
                    type="button"
                    className={clsx(styles.pill, {
                      [styles.pillActive]: selectedPressures.includes(pressure),
                    })}
                    onClick={() => toggleValue(pressure, setSelectedPressures)}
                  >
                    {pressure}
                  </button>
                ))}
              </div>
            </div>

            <div className={clsx(styles.filterGroup, styles.searchGroup)}>
              <h3>キーワード検索</h3>
              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="戦略名、シグナル、能力で検索"
                className={styles.searchInput}
                aria-label="キーワードで戦略を検索"
              />
            </div>
          </div>

          {activeFilters.length > 0 && (
            <div className={styles.activeFilters}>
              <span className={styles.activeFiltersLabel}>有効な条件:</span>
              <div className={styles.activeFilterChips}>
                {activeFilters.map((filter) => (
                  <button
                    key={`${filter.type}-${filter.value}`}
                    type="button"
                    className={styles.activeFilter}
                    onClick={() => clearFilter(filter)}
                  >
                    {filter.value}
                    <span aria-hidden="true">×</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className={styles.resultsSection} aria-labelledby="navigator-results">
        <div className="container">
          <div className={styles.resultsHeader}>
            <div>
              <h2 id="navigator-results">戦略候補</h2>
              <p className={styles.resultsSummary}>
                {strategyProfiles.length} 件中 {filteredStrategies.length} 件を表示
                {hasActiveFilters ? '（条件に一致）' : ''}
              </p>
            </div>
            {comparison.length > 0 && (
              <div className={styles.comparisonCounter}>
                比較対象 {comparison.length} 件（最大 3 件）
              </div>
            )}
          </div>

          {filteredStrategies.length === 0 ? (
            <div className={styles.emptyState}>
              <h3>該当する戦略がありません</h3>
              <p>
                条件を減らすか、検索範囲を広げてみてください。戦略は組み合わせて使うことも多いため、近い目標や段階も試すと見つかりやすくなります。
              </p>
            </div>
          ) : (
            <div className={styles.cardGrid}>
              {filteredStrategies.map((strategy) => {
                const fit = getFitRating(strategy.matchScore, hasActiveFilters);
                const inComparison = comparison.includes(strategy.slug);

                return (
                  <article key={strategy.slug} className={styles.card}>
                    <div className={styles.cardHeader}>
                      <div>
                        <h3 className={styles.cardTitle}>{strategy.title}</h3>
                        <p className={styles.cardSummary}>{strategy.summary}</p>
                      </div>
                      <span
                        className={clsx(styles.fitBadge, {
                          [styles.fitHigh]: fit.tone === 'high',
                          [styles.fitMedium]: fit.tone === 'medium',
                          [styles.fitLow]: fit.tone === 'low',
                          [styles.fitNeutral]: fit.tone === 'neutral',
                        })}
                      >
                        {fit.label}
                      </span>
                    </div>

                    <div className={styles.cardMeta}>
                      <div>
                        <h4>支える目標</h4>
                        <div className={styles.tagRow}>
                          {strategy.goals.map((goal) => (
                            <span
                              key={goal}
                              className={clsx(styles.tag, {
                                [styles.tagActive]: strategy.matchedGoals.includes(goal),
                              })}
                            >
                              {goal}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4>ランドスケープの状態</h4>
                        <div className={styles.tagRow}>
                          {strategy.pressures.map((pressure) => (
                            <span
                              key={pressure}
                              className={clsx(styles.tag, {
                                [styles.tagActive]: strategy.matchedPressures.includes(pressure),
                              })}
                            >
                              {pressure}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className={styles.cardBody}>
                      <div className={styles.cardListGroup}>
                        <h4>注目すべきシグナル</h4>
                        <ul className={styles.cardList}>
                          {strategy.quickSignals.map((signal) => (
                            <li key={signal}>{signal}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.cardListGroup}>
                        <h4>最初の一手</h4>
                        <ul className={styles.cardList}>
                          {strategy.momentumMoves.map((move) => (
                            <li key={move}>{move}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.cardListGroup}>
                        <h4>注意点</h4>
                        <ul className={styles.cardList}>
                          {strategy.watchOuts.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className={styles.cardFooter}>
                      <div className={styles.cardFooterMeta}>
                        <span>負荷: {translateEffortLevel(strategy.effortLevel)}</span>
                        <span>時間軸: {translateTimeHorizon(strategy.timeHorizon)}</span>
                      </div>
                      <div className={styles.cardActions}>
                        <Link className="button button--primary button--sm" to={strategy.slug}>
                          詳細を見る
                        </Link>
                        <button
                          type="button"
                          className={clsx('button button--secondary button--sm', {
                            [styles.compareActive]: inComparison,
                          })}
                          onClick={() => toggleComparison(strategy.slug)}
                          disabled={!inComparison && comparison.length >= 3}
                        >
                          {inComparison ? '比較から外す' : '比較に追加'}
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {comparisonProfiles.length > 0 && (
        <section className={styles.comparisonSection} aria-labelledby="strategy-comparison">
          <div className="container">
            <div className={styles.comparisonHeader}>
              <div>
                <h2 id="strategy-comparison">選択した戦略を比較する</h2>
                <p>
                  リーダーシップの焦点、シグナル、必要負荷を横並びで比較できます。カードを外すと別の戦略を追加できます。
                </p>
              </div>
              <button type="button" className={styles.resetButton} onClick={() => setComparison([])}>
                比較をクリア
              </button>
            </div>

            <div className={styles.comparisonTable} role="table" aria-label="戦略比較テーブル">
              <div
                className={styles.comparisonGrid}
                style={{
                  gridTemplateColumns: `200px repeat(${comparisonProfiles.length}, minmax(220px, 1fr))`,
                }}
              >
                <div className={clsx(styles.comparisonCell, styles.comparisonHeading)} role="columnheader">
                  戦略
                </div>
                {comparisonProfiles.map((profile) => (
                  <div
                    key={profile.slug}
                    className={clsx(styles.comparisonCell, styles.comparisonHeading)}
                    role="columnheader"
                  >
                    <div className={styles.comparisonHeadingInner}>
                      <Link to={profile.slug}>{profile.title}</Link>
                      <button
                        type="button"
                        className={styles.removeComparison}
                        onClick={() => toggleComparison(profile.slug)}
                      >
                        外す
                      </button>
                    </div>
                  </div>
                ))}

                {comparisonRows.map((row) => (
                  <React.Fragment key={row.label}>
                    <div className={clsx(styles.comparisonCell, styles.comparisonLabel)} role="rowheader">
                      {row.label}
                    </div>
                    {comparisonProfiles.map((profile) => (
                      <div key={`${row.label}-${profile.slug}`} className={styles.comparisonCell} role="cell">
                        {row.render(profile)}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default StrategyNavigator;
