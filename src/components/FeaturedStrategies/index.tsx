import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type StrategyItem = {
  title: string;
  imageUrl: string; // Renamed from Svg
  description: React.ReactNode;
  link: string;
};

// icons from https://uxwing.com/
// change colour with `fill="#25c2a0"`

const StrategyList: StrategyItem[] = [
  {
    title: '協調',
    imageUrl: require('@site/static/img/rowers.jpg').default,
    description: (
      <>
        提携、合弁、業界連携などを通じて、共通の目的と相互価値を実現する戦略です。
      </>
    ),
    link: '/strategies/accelerators/cooperation',
  },
  {
    title: 'ネットワーク効果の活用',
    imageUrl: require('@site/static/img/network.jpg').default,
    description: (
      <>
        参加者が増えるほど価値が上がる構造を活かし、持続的な成長を生み出します。
      </>
    ),
    link: '/strategies/accelerators/exploiting-network-effects',
  },
  {
    title: 'テックドロップ',
    imageUrl: require('@site/static/img/parachute.jpg').default,
    description: (
      <>
        大きな技術変化を市場に投下し、競合を後手に回らせる戦略です。

      </>
    ),
    link: '/strategies/competitor/tech-drops',
  },
  {
    title: 'リファクタリング',
    imageUrl: require('@site/static/img/refactoring.jpg').default,
    description: (
      <>
        既存システムの構成要素を分解・再編し、価値を救い出しながら毒性を減らします。
      </>
    ),
    link: '/strategies/dealing-with-toxicity/refactoring/'
  },
  {
    title: '人工的競争',
    imageUrl: require('@site/static/img/artificial-competition.jpg').default,
    description: (
      <>
        自社と競合する別組織を立てることで、競争が存在するように見せる戦略です。
      </>
    ),
    link: '/strategies/user-perception/artificial-competition'
  },
  {
    title: '断片化',
    imageUrl: require('@site/static/img/fragmentation.jpg').default,
    description: (
      <>
        市場構造を変え、競合の牙城を小さく分断して優位を崩します。
      </>
    ),
    link: '/strategies/competitor/fragmentation'
  }
];

function Strategy({title, imageUrl, description, link}: StrategyItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={link}>
        <div className="card shadow--md margin-vert--md">
          <div className="text--center card__image">
            <img src={imageUrl} alt={title} className={styles.featureImage} />
          </div>
          <div className="card__body">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className="card__footer">
            <button className="button button--secondary button--block">詳しく見る</button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function FeaturedStrategies(): React.ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <h2 className="text--center">注目の戦略</h2>
                <div className="row">
                    {StrategyList.map((props, idx) => (
                        <Strategy key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
