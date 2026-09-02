import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {
  clearAllAssessments,
  clearStrategy,
  getAllSummaries,
  isStorageAvailable,
} from '@site/src/utils/assessmentStorage';
import { AssessmentSummary } from '@site/src/components/Assessment/types';
import styles from './my-progress.module.css';

const formatDateTime = (value: string): string => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleString('ja-JP', {
    dateStyle: 'medium',
    timeStyle: 'short',
  });
};

const formatLevelLabel = (value: string): string =>
  value === 'Strong' ? '強い' : '弱い';

const getStatusBadge = (
  summary: AssessmentSummary,
): {label: string; className: string} => {
  if (summary.mapLevel === 'Strong' && summary.readinessLevel === 'Strong') {
    return {label: 'すぐ実行可能', className: 'badge--success'};
  }
  if (summary.mapLevel === 'Strong' || summary.readinessLevel === 'Strong') {
    return {label: '準備が必要', className: 'badge--warning'};
  }
  return {label: '戦略の再検討', className: 'badge--danger'};
};

const ScoreBadge = ({label, score}: {label: string; score: number}) => (
  <div className={styles.scoreCell}>
    <span className={clsx('badge', label === 'Strong' ? 'badge--success' : 'badge--secondary')}>
      {formatLevelLabel(label)}
    </span>
    <span className={styles.scoreValue}>{score}</span>
  </div>
);

export default function MyProgressPage(): React.ReactElement {
  const [summaries, setSummaries] = useState<AssessmentSummary[]>([]);
  const [storageReady, setStorageReady] = useState(false);

  const refresh = useCallback(() => {
    if (isStorageAvailable()) {
      setSummaries(getAllSummaries());
      setStorageReady(true);
    } else {
      setStorageReady(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const emptyState = storageReady && summaries.length === 0;

  const handleClearAll = () => {
    clearAllAssessments();
    refresh();
  };

  const handleRemove = (id: string) => {
    clearStrategy(id);
    refresh();
  };

  const totalStrong = useMemo(
    () => summaries.filter((summary) => summary.mapLevel === 'Strong' && summary.readinessLevel === 'Strong').length,
    [summaries],
  );

  return (
    <Layout title="保存した戦略評価" description="保存したWardley Mappingの戦略評価を見直して管理できます。">
      <main className="container margin-vert--lg">
        <header className="margin-bottom--lg">
          <h1 className="margin-bottom--sm">保存した戦略評価</h1>
          <p className="margin-bottom--md">
            途中からそのまま再開できるよう、各戦略評価で選んだ信号機の状態をブラウザ内に保存します。
            後で見返し、比較し、計画を磨くためのページです。
          </p>
          <div className={styles.headerActions}>
            <Link className="button button--primary" to="/strategies">
              戦略一覧を見る
            </Link>
            <button
              type="button"
              className="button button--secondary"
              onClick={handleClearAll}
              disabled={!storageReady || summaries.length === 0}
            >
              保存した評価を消去
            </button>
          </div>
        </header>

        {!storageReady && (
          <div className="alert alert--warning" role="alert">
            この環境ではローカルストレージが無効のため、評価結果を保存できません。
            Cookieまたはローカルストレージを有効にしてから再度確認してください。
          </div>
        )}

        {emptyState && (
          <div className={clsx('card', 'card--full-width', styles.emptyState)}>
            <div className="card__body">
              <h2>まだ保存された評価はありません</h2>
              <p>
                任意の戦略ページでセルフ評価ツールを使うと、回答がここに自動保存されます。
              </p>
              <Link className="button button--primary" to="/strategies">
                戦略を探し始める
              </Link>
            </div>
          </div>
        )}

        {storageReady && summaries.length > 0 && (
          <>
            <section className={clsx('margin-bottom--lg', styles.summaryPanel)}>
              <div className="card">
                <div className="card__body">
                  <strong>{summaries.length}</strong>件の戦略を評価済み・
                  <strong>{totalStrong}</strong>件が即実行可能
                </div>
              </div>
            </section>

            <div className="table-responsive">
              <table className={clsx('table', styles.table)}>
                <thead>
                  <tr>
                    <th scope="col">戦略</th>
                    <th scope="col">戦略適合度</th>
                    <th scope="col">実行力</th>
                    <th scope="col">推奨</th>
                    <th scope="col">最終更新</th>
                    <th scope="col" className="text--right">操作</th>
                  </tr>
                </thead>
                <tbody>
                  {summaries.map((summary) => {
                    const badge = getStatusBadge(summary);
                    return (
                      <tr key={summary.id}>
                        <td>
                          {summary.permalink ? (
                            <Link to={summary.permalink}>
                              {summary.strategyTitle ?? summary.strategyName}
                            </Link>
                          ) : (
                            <span>{summary.strategyTitle ?? summary.strategyName}</span>
                          )}
                          {summary.strategyTitle && summary.strategyTitle !== summary.strategyName && (
                            <div className={styles.secondaryName}>{summary.strategyName}</div>
                          )}
                        </td>
                        <td>
                          <ScoreBadge label={summary.mapLevel} score={summary.mapScore} />
                        </td>
                        <td>
                          <ScoreBadge label={summary.readinessLevel} score={summary.readinessScore} />
                        </td>
                        <td>
                          <div className={styles.recommendationCell}>
                            <span className={clsx('badge', badge.className)}>{badge.label}</span>
                            <span className={styles.recommendationText}>{summary.recommendation}</span>
                          </div>
                        </td>
                        <td>{formatDateTime(summary.updatedAt)}</td>
                        <td className={clsx(styles.actionCell, 'text--right')}>
                          {summary.permalink && (
                            <Link className="button button--sm button--secondary" to={summary.permalink}>
                              戦略を見る
                            </Link>
                          )}
                          <button
                            type="button"
                            className="button button--sm button--danger"
                            onClick={() => handleRemove(summary.id)}
                          >
                            削除
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
      </main>
    </Layout>
  );
}
