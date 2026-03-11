import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import BrowserFrame from '../BrowserFrame';

export default function HomepageFeatures(): ReactNode {
  const assessmentToolScreenshot = useBaseUrl('/img/assessment-tool-screenshot.png');

  return (
    <section className={styles.features}>
    <div className="container">
      <div className="row">

        <div className={clsx('col col--8')}>
          <div className="hero shadow--md margin-vert--lg">
            <div className="container">
              <h2 className="hero__title"><Link to="/strategies">60 以上のリーダーシップ戦略</Link></h2>
              <p className="hero__subtitle">
                Wardley Map から具体的な行動へ落とし込むための実践ガイドです。
                詳細な解説と現実の事例を通じて、多様な状況と競争環境で使える戦略ゲームプレイを探せます。
              </p>
              <div>
                <h3>カテゴリから探す</h3>
                <p>
                  <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/strategies/accelerators">加速戦略</Link>
                  <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/strategies/attacking">攻撃戦略</Link>
                  <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/strategies/competitor">競合対応</Link>
                  <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/strategies/dealing-with-toxicity">毒性への対処</Link>
                  <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/strategies/decelerators">減速戦略</Link>
                  <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/strategies/defensive">防衛戦略</Link>
                  <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/strategies/ecosystem">エコシステム</Link>
                  <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/strategies/markets">市場</Link>
                  <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/strategies/poison">ポイズン</Link>
                  <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/strategies/positional">ポジショニング</Link>
                  <Link className="margin-right--sm margin-bottom--sm button button--outline button--primary" to="/strategies/user-perception">ユーザー認識</Link>
                </p>
              </div>
            </div>
          </div>      
        </div>

        <div className={clsx('col col--4')}>
          <div className={`${styles.miniHero} margin-vert--lg`}>
            <div className="container">
              <h2 className={styles.miniHero__title}>このサイトは何か</h2>
              <div className={styles.miniHero__subtitle}>
                <p>Wardley Map は競争環境を理解し、より良い戦略判断を行うための視覚的な道具です。</p>
                <p><strong>Wardley Leadership Strategies</strong> は、実行可能なリーダーシップ戦略に焦点を当てた実践的なガイドです。</p>
                <p>この日本語版では、原典をもとに内容を翻訳し、継続的に改善していきます。</p>
              </div>
              <div>
                  <Link className="margin-right--sm margin-bottom--sm button button--primary" to="/about">詳しく見る</Link>
              </div>
            </div>
          </div>      
        </div>

      </div>

      <div className="margin-vert--lg">
        <div className="card shadow--md padding--lg">
          <div className="row">
            <div className={clsx('col col--8', 'margin-bottom--md', styles.reverseOnMobile)}>
              <h2 className="margin-bottom--sm">戦略評価ツール</h2>
              <p className="margin-bottom--sm" style={{ fontSize: '1.25rem' }}>
                <Link to="/about/assessment-tool">戦略評価ツール</Link> を使うと、
                各戦略が自分たちの状況にどれだけ適しているか、実行準備が整っているかを手早く確認できます。
                マップ上のシグナルと組織の準備状況を見ながら判断できます。
              </p>
              <div className={styles.buttonGroup}>
                <Link className="button button--primary" to="/about/assessment-tool">
                  ツールを使う
                </Link>
                <Link className="button button--secondary" to="/my-progress">
                  保存した評価を見る
                </Link>
              </div>
            </div>
            <div className={clsx('col col--4')}>
              <BrowserFrame>
                <img src={assessmentToolScreenshot} alt="戦略評価ツール" style={{ width: '100%', borderRadius: '8px' }} />
              </BrowserFrame>
            </div>
          </div>
        </div>

        <div className="card shadow--md padding--lg margin-top--lg">
          <div className="row">
            <div className={clsx('col col--8', 'margin-bottom--md', styles.reverseOnMobile)}>
              <h2 className="margin-bottom--sm">戦略ナビゲーター</h2>
              <p className="margin-bottom--sm" style={{ fontSize: '1.15rem' }}>
                いまの状況に合う戦略候補を絞り込みたいときに使います。目標、進化段階、組織的な圧力を組み合わせて候補を見つけ、
                実行前に並べて比較できます。
              </p>
              <ul className="margin-bottom--sm">
                <li>60 以上の戦略を成果ベースで絞り込めます。</li>
                <li>気候シグナル、最初の一手、注意点を一覧できます。</li>
                <li>最大 3 つまで比較して次の一手を選べます。</li>
              </ul>
              <Link className="button button--secondary" to="/strategy-navigator">
                ナビゲーターを開く
              </Link>
            </div>
            <div className={clsx('col col--4')}>
              <BrowserFrame>
                <div className={styles.navigatorPreview}>
                  <span className={styles.navigatorBadge}>高適合</span>
                  <div className={styles.navigatorPills}>
                    <span className={styles.navigatorPill}>普及を加速</span>
                    <span className={styles.navigatorPill}>Genesis</span>
                    <span className={styles.navigatorPill}>限られたリソース</span>
                  </div>
                  <div className={styles.navigatorStack}>
                    <div>
                      <h4>シグナル</h4>
                      <p>マップ上に補完関係のあるパートナーが見える。</p>
                    </div>
                    <div>
                      <h4>初動</h4>
                      <p>小さな協業から試す。</p>
                    </div>
                  </div>
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>

        <div className="card shadow--md padding--lg margin-top--lg">
          <div className="row">
            <div className={clsx('col col--8', 'margin-bottom--md', styles.reverseOnMobile)}>
              <h2 className="margin-bottom--sm">戦略パルスチェック</h2>
              <p className="margin-bottom--sm" style={{ fontSize: '1.15rem' }}>
                軽量で繰り返し使えるチェックで、リーダーシップのテンポを整えます。市場の乱れ、競争圧、実行準備、足並みの揃い方を記録し、
                スナップショットを保存して変化を追えます。
              </p>
              <ul className="margin-bottom--sm">
                <li>マップ見直し後に 5 分で振り返れます。</li>
                <li>戦略の時系列ログとしてスナップショットを残せます。</li>
                <li>次の一手のテンポに関する提案をすぐ得られます。</li>
              </ul>
              <Link className="button button--secondary" to="/tools/strategy-pulse-check">
                パルスチェックを始める
              </Link>
            </div>
            <div className={clsx('col col--4')}>
              <BrowserFrame>
                <div className={styles.pulsePreview}>
                  <span className={styles.pulseBadge}>Pulse</span>
                  <div className={styles.pulseScore}>
                    <span>平均</span>
                    <strong>3.8</strong>
                  </div>
                  <div className={styles.pulseBars}>
                    <span>変動</span>
                    <span>競争圧</span>
                    <span>準備度</span>
                    <span>整合</span>
                  </div>
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>

        <div className="card shadow--md padding--lg margin-top--lg">
          <div className="row">
            <div className={clsx('col col--8', 'margin-bottom--md', styles.reverseOnMobile)}>
              <h2 className="margin-bottom--sm">戦略ガイド</h2>
              <p className="margin-bottom--sm" style={{ fontSize: '1.15rem' }}>
                チームがマップから行動へ移るためのステップ型プレイブックです。まずは{' '}
                <Link to="/strategy-guides/introduction-to-strategic-play">戦略的プレイ入門</Link> から始め、
                具体的なシナリオ別ガイドへ進めます。
              </p>
              <ul className="margin-bottom--sm">
                <li>構造化された問いでチームの次の一手を揃えます。</li>
                <li>シグナル、リスク、短いフィードバックループを記録できます。</li>
                <li>戦略判断の共通言語を持てます。</li>
              </ul>
              <div className={styles.buttonGroup}>
                <Link className="button button--primary" to="/strategy-guides">
                  戦略ガイドを見る
                </Link>
                <Link className="button button--secondary" to="/strategy-guides/introduction-to-strategic-play">
                  入門ガイドを読む
                </Link>
              </div>
            </div>
            <div className={clsx('col col--4')}>
              <BrowserFrame>
                <div className={styles.guidesPreview}>
                  <span className={styles.guidesBadge}>新シリーズ</span>
                  <h3>Strategic Play</h3>
                  <p>
                    意図を揃え、ゲームプレイを選び、最初の実験を定めるためのガイドです。
                  </p>
                  <div className={styles.guidesChecklist}>
                    <span>マップ確認</span>
                    <span>戦略選定</span>
                    <span>初動設計</span>
                  </div>
                </div>
              </BrowserFrame>
            </div>
          </div>
        </div>
      </div>

    </div>

    </section>
  );
}
