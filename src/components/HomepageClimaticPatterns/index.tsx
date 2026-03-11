import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from '../HomepageFeatures/styles.module.css';

export default function HomepageClimaticPatterns(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx(styles.miniHero, 'margin-vert--lg')}>
          <div className="container">
            <h2 className={styles.miniHero__title}>
              <Link to="/climatic-patterns">状勢パターン</Link>
            </h2>
            <p className={styles.miniHero__subtitle}>
              時間をかけて市場を形づくる力学を理解し、変化を先読みします。
            </p>
            <div>
              <h3>カテゴリから探す</h3>
              <p className={styles.categoryLinks}>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/climatic-patterns#components">コンポーネント</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/climatic-patterns#competitors">競合</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/climatic-patterns#financial">金融</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/climatic-patterns#inertia">慣性</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/climatic-patterns#prediction">予測</a>
                <a className="margin-right--sm margin-bottom--sm button button--outline button--primary" href="/climatic-patterns#speed">速度</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
