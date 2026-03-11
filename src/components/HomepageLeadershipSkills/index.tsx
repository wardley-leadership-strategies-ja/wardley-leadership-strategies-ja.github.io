import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '../HomepageFeatures/styles.module.css';

export default function HomepageLeadershipSkills(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx(styles.miniHero, 'margin-vert--lg')}>
          <div className="container">
            <h2 className={styles.miniHero__title}>
              <Link to="/leadership-skills">リーダーシップスキル</Link>
            </h2>
            <p className={styles.miniHero__subtitle}>
              Wardley の洞察を実際の意思決定へ変えるためのリーダーシップ能力を鍛えます。
            </p>
            <div>
              <h3>スキル分類</h3>
              <p className={styles.categoryLinks}>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/leadership-skills#sensemaking-and-analysis">状況把握と分析</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/leadership-skills#market-and-commercial-strategy">市場と商業戦略</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/leadership-skills#competitive-positioning-and-game-dynamics">競争力学</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/leadership-skills#ecosystems-platforms-and-standards">エコシステムと標準</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/leadership-skills#governance-risk-and-ethics">ガバナンスとリスク</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/leadership-skills#execution-and-transformation">実行と変革</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/leadership-skills#innovation-and-learning">イノベーションと学習</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/leadership-skills#influence-negotiation-and-conflict">影響力と交渉</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/leadership-skills#people-and-culture">人と文化</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/leadership-skills#legal-regulatory-and-security">法務とセキュリティ</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
