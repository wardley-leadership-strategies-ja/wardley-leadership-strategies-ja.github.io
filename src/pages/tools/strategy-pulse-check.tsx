import type {ReactNode} from 'react';
import {useEffect, useMemo, useState} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './strategy-pulse-check.module.css';

const STORAGE_KEY = 'wardley-strategy-pulse-check';

type PulseSnapshot = {
  id: string;
  label: string;
  timestamp: string;
  turbulence: number;
  competitivePressure: number;
  executionReadiness: number;
  alignment: number;
};

type MetricKey = 'turbulence' | 'competitivePressure' | 'executionReadiness' | 'alignment';

const metricDescriptions: Record<MetricKey, string> = {
  turbulence: '状況がどれだけ速く変わり、シグナルがどれだけ騒がしいか。',
  competitivePressure: 'いま競争上の動きがどれだけ激しいか。',
  executionReadiness: '次の一手を素早く自信を持って実行できるか。',
  alignment: '現在のマップと優先順位について、リーダーとチームの認識がどれだけ揃っているか。',
};

const levelDescriptions: Record<MetricKey, Record<number, string>> = {
  turbulence: {
    1: '安定：状況は静かで、変化は漸進的。',
    2: '緩やかな変化: いくつか兆候はあるが、優先順位はまだ安定している。',
    3: '活発: 変化が目立ち、少なくとも月次で見直しが必要。',
    4: '不安定: シグナルが週単位で変わり、前提がすぐ古くなる。',
    5: 'カオス: 連続的な攪乱により、素早い実験が必要になる。',
  },
  competitivePressure: {
    1: '静か: 競合は大きく動いていない、または別領域に集中している。',
    2: '警戒段階: 小さな探索はあるが、まだ限定的。',
    3: '競争中: 競争上の動きが頻繁に見える。',
    4: '攻勢: 競合が大胆な施策や価格変動を仕掛けている。',
    5: '全面戦: 勝ち負けを賭けた争いが毎週加速している。',
  },
  executionReadiness: {
    1: '未準備: 実行が詰まっている、または中核能力が不足している。',
    2: '脆弱: 余力が少なく、実行への自信も揺らぎやすい。',
    3: '実行可能: チームは集中して動け、トレードオフも明確。',
    4: '準備完了: リソースと筋肉記憶があり、素早く動ける。',
    5: '最良: 実行は鋭く、再現性があり、速度も高い。',
  },
  alignment: {
    1: '分断: リーダー間でマップや優先順位の認識が割れている。',
    2: 'まだら: 一部は揃っているが、重要チームがずれ始めている。',
    3: '共有: 多くのリーダーが優先順位と意図で一致している。',
    4: '統一: 共通のマップ物語が一貫した行動を生む。',
    5: '強固: 深く揃っており、意思決定の摩擦が少ない。',
  },
};

const toScoreLabel = (score: number): string => {
  if (score >= 4.2) {
    return '高い';
  }
  if (score >= 3) {
    return '安定';
  }
  return '要改善';
};

const buildRecommendations = (scores: PulseSnapshot): string[] => {
  const recommendations: string[] = [];

  if (scores.turbulence >= 4) {
    recommendations.push('計画サイクルを短くし、マップのシグナルを週次で見直してください。');
  }
  if (scores.competitivePressure >= 4) {
    recommendations.push('対抗策を事前に検証し、素早い動きに備えてメッセージングも準備してください。');
  }
  if (scores.executionReadiness <= 3) {
    recommendations.push('後戻りしにくい一手に入る前に、能力ギャップへ投資してください。');
  }
  if (scores.alignment <= 3) {
    recommendations.push('リーダー層でマップレビューを行い、共有意図を揃え直してください。');
  }
  if (recommendations.length === 0) {
    recommendations.push('現在のリズムを維持しつつ、新しいシグナルを2週間ごとに記録してください。');
  }

  return recommendations;
};

const formatDate = (value: string): string =>
  new Date(value).toLocaleString('ja-JP', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });

const isNumberInRange = (value: unknown): value is number =>
  typeof value === 'number' && Number.isFinite(value) && value >= 1 && value <= 5;

const isValidSnapshot = (value: unknown): value is PulseSnapshot => {
  if (!value || typeof value !== 'object') {
    return false;
  }
  const snapshot = value as PulseSnapshot;
  return (
    typeof snapshot.id === 'string' &&
    typeof snapshot.label === 'string' &&
    typeof snapshot.timestamp === 'string' &&
    isNumberInRange(snapshot.turbulence) &&
    isNumberInRange(snapshot.competitivePressure) &&
    isNumberInRange(snapshot.executionReadiness) &&
    isNumberInRange(snapshot.alignment)
  );
};

export default function StrategyPulseCheck(): ReactNode {
  const [turbulence, setTurbulence] = useState(3);
  const [competitivePressure, setCompetitivePressure] = useState(3);
  const [executionReadiness, setExecutionReadiness] = useState(3);
  const [alignment, setAlignment] = useState(3);
  const [label, setLabel] = useState('');
  const [snapshots, setSnapshots] = useState<PulseSnapshot[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return;
    }
    try {
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) {
        setSnapshots([]);
        return;
      }
      const validSnapshots = parsed.filter(isValidSnapshot);
      setSnapshots(validSnapshots);
    } catch {
      setSnapshots([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snapshots));
  }, [snapshots]);

  const averageScore = useMemo(() => {
    const total = turbulence + competitivePressure + executionReadiness + alignment;
    return Number((total / 4).toFixed(1));
  }, [turbulence, competitivePressure, executionReadiness, alignment]);

  const scoreLabel = toScoreLabel(averageScore);

  const recommendations = useMemo(() => {
    return buildRecommendations({
      id: 'current',
      label: '現在値',
      timestamp: new Date().toISOString(),
      turbulence,
      competitivePressure,
      executionReadiness,
      alignment,
    });
  }, [turbulence, competitivePressure, executionReadiness, alignment]);

  const handleSave = () => {
    const snapshot: PulseSnapshot = {
      id: `${Date.now()}`,
      label: label.trim() || '名称未設定のチェック',
      timestamp: new Date().toISOString(),
      turbulence,
      competitivePressure,
      executionReadiness,
      alignment,
    };

    setSnapshots((prev) => [snapshot, ...prev].slice(0, 10));
    setLabel('');
  };

  const handleLoad = (snapshot: PulseSnapshot) => {
    setTurbulence(snapshot.turbulence);
    setCompetitivePressure(snapshot.competitivePressure);
    setExecutionReadiness(snapshot.executionReadiness);
    setAlignment(snapshot.alignment);
  };

  const handleDelete = (snapshotId: string) => {
    setSnapshots((prev) => prev.filter((snapshot) => snapshot.id !== snapshotId));
  };

  return (
    <Layout
      title="戦略パルスチェック"
      description="継続的なパルスチェックで、戦略環境の変動、競争圧、準備度、整合性を追跡します。"
    >
      <header className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <Heading as="h1" className={styles.heroTitle}>
              戦略パルスチェック
            </Heading>
            <p className={styles.heroSubtitle}>
              リーダーシップチームが戦略環境を定期的に観測し、勢いを感じ取り、加速すべきか立て直すべきかを判断するための軽量ツールです。
              時系列で保存して、マップ上のシグナル変化を追えます。
            </p>
            <span className={styles.insightPill}>平均スコア: {averageScore} ・ {scoreLabel}</span>
          </div>
        </div>
      </header>

      <main className="container margin-vert--lg">
        <section className={styles.section}>
          <div className="row">
            <div className="col col--7">
              <div className={styles.card}>
                <Heading as="h2">パルスを調整する</Heading>
                <p className={styles.note}>
                  最新のマップレビューに基づいて各シグナルを調整してください。1が低く、5が高い状態です。
                </p>

                <div className={styles.sliderRow}>
                  <div className={styles.sliderHeader}>
                    <span>変動</span>
                    <span className={styles.sliderValue}>{turbulence}</span>
                  </div>
                  <input
                    className={styles.sliderInput}
                    type="range"
                    min={1}
                    max={5}
                    value={turbulence}
                    onChange={(event) => setTurbulence(Number(event.target.value))}
                  />
                  <span className={styles.note}>{metricDescriptions.turbulence}</span>
                  <span className={styles.levelHint}>{levelDescriptions.turbulence[turbulence]}</span>
                </div>

                <div className={styles.sliderRow}>
                  <div className={styles.sliderHeader}>
                    <span>競争圧</span>
                    <span className={styles.sliderValue}>{competitivePressure}</span>
                  </div>
                  <input
                    className={styles.sliderInput}
                    type="range"
                    min={1}
                    max={5}
                    value={competitivePressure}
                    onChange={(event) => setCompetitivePressure(Number(event.target.value))}
                  />
                  <span className={styles.note}>{metricDescriptions.competitivePressure}</span>
                  <span className={styles.levelHint}>
                    {levelDescriptions.competitivePressure[competitivePressure]}
                  </span>
                </div>

                <div className={styles.sliderRow}>
                  <div className={styles.sliderHeader}>
                    <span>実行準備</span>
                    <span className={styles.sliderValue}>{executionReadiness}</span>
                  </div>
                  <input
                    className={styles.sliderInput}
                    type="range"
                    min={1}
                    max={5}
                    value={executionReadiness}
                    onChange={(event) => setExecutionReadiness(Number(event.target.value))}
                  />
                  <span className={styles.note}>{metricDescriptions.executionReadiness}</span>
                  <span className={styles.levelHint}>
                    {levelDescriptions.executionReadiness[executionReadiness]}
                  </span>
                </div>

                <div className={styles.sliderRow}>
                  <div className={styles.sliderHeader}>
                    <span>整合性</span>
                    <span className={styles.sliderValue}>{alignment}</span>
                  </div>
                  <input
                    className={styles.sliderInput}
                    type="range"
                    min={1}
                    max={5}
                    value={alignment}
                    onChange={(event) => setAlignment(Number(event.target.value))}
                  />
                  <span className={styles.note}>{metricDescriptions.alignment}</span>
                  <span className={styles.levelHint}>{levelDescriptions.alignment[alignment]}</span>
                </div>
              </div>
            </div>

            <div className="col col--5">
              <div className={clsx(styles.card, 'margin-bottom--lg')}>
                <Heading as="h2">この結果の意味</Heading>
                <p className={styles.note}>
                  次の戦略行動のテンポを選ぶために、以下の解釈を使ってください。
                </p>
                <p>
                  <strong>{scoreLabel}パルス。</strong>平均スコア{averageScore}から見ると、現在の運営リズムは
                  {averageScore >= 4
                    ? '速く、実験的に動くのが適しています。'
                    : averageScore >= 3
                      ? '安定を保ちつつ、高頻度で状況把握するのが適しています。'
                      : 'まず基盤を安定させることに集中すべきです。'}
                </p>
                <Heading as="h3">推奨フォーカス</Heading>
                <ul className={styles.recommendationList}>
                  {recommendations.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="row">
            <div className="col col--12">
              <div className={styles.card}>
                <Heading as="h2">このチェックを保存する</Heading>
                <p className={styles.note}>
                  リーダーシップレビューのたびにスナップショットを保存できます。直近10件まで保持します。
                </p>
                <div className={styles.snapshotForm}>
                  <input
                    className={clsx('input input--lg', styles.snapshotInput)}
                    type="text"
                    placeholder="ラベル（例：Q3マップレビュー）"
                    value={label}
                    onChange={(event) => setLabel(event.target.value)}
                  />
                  <button
                    className={clsx('button button--primary', styles.snapshotButton)}
                    type="button"
                    onClick={handleSave}
                  >
                    保存
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="row">
            <div className="col col--12">
              <div className={styles.card}>
                <Heading as="h2">最近のスナップショット</Heading>
                {snapshots.length === 0 ? (
                  <p className={styles.note}>
                    まだスナップショットはありません。最初のパルスチェックを保存して、変化の追跡を始めてください。
                  </p>
                ) : (
                  <ul className={styles.snapshotList}>
                    {snapshots.map((snapshot) => (
                      <li key={snapshot.id} className={styles.snapshotItem}>
                        <div className={styles.snapshotMeta}>
                          <div>
                            <strong>{snapshot.label}</strong>
                            <div className={styles.note}>{formatDate(snapshot.timestamp)}</div>
                          </div>
                          <div className={styles.snapshotActions}>
                            <button
                              className="button button--secondary button--sm"
                              type="button"
                              onClick={() => handleLoad(snapshot)}
                            >
                              読み込む
                            </button>
                            <button
                              className="button button--outline button--secondary button--sm"
                              type="button"
                              onClick={() => handleDelete(snapshot.id)}
                            >
                              削除
                            </button>
                          </div>
                        </div>
                        <div className={styles.snapshotDetails}>
                          変動 {snapshot.turbulence} ・競争圧 {snapshot.competitivePressure} ・
                          実行準備 {snapshot.executionReadiness} ・整合性 {snapshot.alignment}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
