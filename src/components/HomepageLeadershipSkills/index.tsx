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
              Wardleyの洞察を実際の意思決定へ変えるためのリーダーシップ能力を鍛えます。
            </p>
            <div>
              <h3>スキル分類</h3>
              <p className={styles.categoryLinks}>
                <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/leadership-skills#sensemaking-and-analysis">状況把握と分析</Link>
                <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/leadership-skills#market-and-commercial-strategy">市場と商業戦略</Link>
                <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/leadership-skills#competitive-positioning-and-game-dynamics">競争力学</Link>
                <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/leadership-skills#ecosystems-platforms-and-standards">エコシステムと標準</Link>
                <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/leadership-skills#governance-risk-and-ethics">ガバナンスとリスク</Link>
                <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/leadership-skills#execution-and-transformation">実行と変革</Link>
                <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/leadership-skills#innovation-and-learning">イノベーションと学習</Link>
                <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/leadership-skills#influence-negotiation-and-conflict">影響力と交渉</Link>
                <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/leadership-skills#people-and-culture">人と文化</Link>
                <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/leadership-skills#legal-regulatory-and-security">法務とセキュリティ</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
