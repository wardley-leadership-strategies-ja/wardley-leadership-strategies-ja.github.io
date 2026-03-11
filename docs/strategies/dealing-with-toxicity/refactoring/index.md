---
title: リファクタリング
description: レガシー構成要素を社内で組み替え、価値を救いながら毒性を減らす戦略。
tags:
- refactoring
- dealing-with-toxicity
- legacy
- transformation
- reuse
- reorganization
- internal disposal
authors:
- dave-hulbert
stages:
- Product
- Commodity/Utility
goals:
- Reduce legacy drag
- Stabilise operations
pressures:
- Legacy system drag
- Limited resources or capacity
- Need to go faster than internal bureaucracy
leadership_focus:
- Change management
- Architectural thinking
- Talent redeployment
quick_signals:
- レガシープラットフォームが予算と注意を過剰に吸っている。
- 地図上で、残すべき部品と廃止すべき毒性部品が見えている。
- 危険な一括切替なしで移行するための猶予が必要である。
momentum_moves:
- 意思決定のために、構成要素、スキル、データフローを棚卸しする。
- 段階的に価値を解放できるよう順序を組む。
- 士気と集中を保つため、再配置計画を早めに共有する。
watch_outs:
- 明確なガバナンスなしに作業が膨張すること。
- 技術だけをいじり、プロセスや人の影響を無視すること。
- 判断先送りで二重運用を永続化すること。
effort_level: Enterprise Transformation
time_horizon: Long-term positioning
---

**レガシーシステムの構成要素を社内で組み替え、使える価値を救いながら毒性を減らす戦略です。**

:::note
**Refactoring** は Wardley の [On 61 different forms of gameplay](https://blog.gardeviance.org/2015/05/on-61-different-forms-of-gameplay.html) に明示的には出てきません。
:::

## 🤔 **解説**

### リファクタリングとは何か

全面廃棄や売却ではなく、資産を社内に残したまま構造を作り替える戦略です。古い資産を部品に分け、使える部分には新しい役割を与え、使えない部分だけを捨てます。ソフトウェアのコードリファクタリングを、事業資産や組織資産に広げたものだと考えると分かりやすいです。

目的は、損失を減らしながら残存価値を組織へ再統合することです。人、技術、データ、設備、業務知識などのうち、ほかの文脈でまだ使えるものを見つけて、新しい価値連鎖へ移します。

### なぜ使うのか

- **捨てずに価値を救える**
- **急停止による混乱を避けられる**
- **人材や知識を社内に残せる**
- **毒性の強い部分だけを計画的に除去できる**

## 🗺️ **実例**

### ソフトウェアと IT

古いメインフレームや一枚岩アプリケーションを、段階的に API やサービスへ切り出す例です。重要な業務ロジックやデータは残しつつ、保守困難な構造だけを壊していきます。

### 産業分野

内燃機関事業を縮小する自動車会社が、古い生産ラインは低コスト拠点へ寄せ、使える設備や人材は電動化側へ再配置するようなケースです。全部を捨てるのではなく、残存価値を別の形へ転用します。

### 仮想例

印刷物中心だった出版社が、紙面レイアウト要員の一部をデジタル制作やマーケティングへ移し、自動化できる工程は自動化し、余剰部分だけを整理する。旧来事業を細らせながら、新しい事業へ人と設備を流し直す動きです。

## 🚦 **使いどころ**

<Assessment strategyName="Refactoring">
  <MapSignals>
    <li>価値や重要性が落ちるレガシー運用を抱えている。</li>
    <li>地図上で、そのレガシー資産の中にまだ使える下位構成要素が見えている。</li>
    <li>全面廃棄の政治的・実務的コストが高く、急な出口を取りにくい。</li>
    <li>保存すべき内部依存や知識が埋まっている。</li>
    <li>緊急停止ではなく、計画的な変換を進める時間がある。</li>
    <li>救い出した要素を、新しい戦略施策へ組み込める。</li>
    <li>レガシーが内部毒性や慣性の源になっている。</li>
  </MapSignals>
  <Readiness>
    <li>スキル、技術、データ、設備を再利用観点で評価できる。</li>
    <li>他の運用を壊さずに内部再編を実行できる。</li>
    <li>一時的な二重運用に耐えられる。</li>
    <li>段階的変化に耐える文化と変革経験がある。</li>
    <li>人の再訓練や再配置を丁寧に行える。</li>
    <li>移行中に横断的な説明を続けられる。</li>
    <li>明確な期限とガバナンスがある。</li>
  </Readiness>
</Assessment>

### 向くとき

- レガシー資産に再配置できる価値のある部品が残っているとき
- 事業の衰退が一夜で起きるのではなく、計画的に組み替える時間があるとき
- 従業員や知識を残しながら移行したいとき
- 終了状態がある程度見えていて、段階的に切り分けられるとき

### 避けるとき

- 毒性が強すぎて、ゆるやかな変化では出血が止まらないとき
- 組み替えコストが高すぎて、経営資源を食い潰すとき
- 救える部分がほとんどなく、単に終了を遅らせるだけになるとき

## 🎯 **リーダーシップ**

### 中核課題

移行を繊細かつ断固として進めることです。古いものの中にある本当の価値を見つけ、過去への愛着や抵抗を越え、人を含む資源をうまく再配置しなければなりません。

### 必要なスキル

- [Change leadership and transformation](/leadership-skills/change-leadership-and-transformation) — 再編と役割変更を率いる
- [Strategic sensemaking](/leadership-skills/strategic-sensemaking) — 残すべきものと捨てるべきものを見極める
- [Strategic communication and storytelling](/leadership-skills/strategic-communication-and-storytelling) — なぜ組み替えるのかを明確に伝える
- [Talent development and team building](/leadership-skills/talent-development-and-team-building) — 人や技術をどこへ再投資するかを判断する
- [Systems and value chain thinking](/leadership-skills/systems-and-value-chain-thinking) — レガシーに結びつく人と運用全体への影響を理解する

### 倫理面

- 役割変更や消失を透明かつ公正に扱うこと
- 顧客向けサービスへの影響を丁寧に説明すること
- 移管や再利用するデータを規制と倫理に沿って扱うこと

## 📋 **進め方**

1. Wardley Map などでレガシー資産を部品へ分解する
2. 各部品の価値と進化段階を評価する
3. 再利用可能な人、技術、データ、設備を特定する
4. 再配置、再訓練、廃止の計画を作る
5. 可能な範囲で段階的に実行し、必要なら並行運用する
6. 影響を受ける関係者へ継続的に説明する
7. 純粋な毒性だけが残った部分を正式に止める

## 📈 **成功指標**

- レガシー維持コストの削減
- 人材、技術、資本の戦略領域への再配置率
- レガシー制約除去による組織速度の改善
- 再利用コンポーネントの新サービスへの寄与
- 移行対象者の定着率やエンゲージメント
- 計画した段階ごとの完了率

## ⚠️ **失敗しやすい点**

### スコープ膨張

「ついでにここも」と広げると、終わらないプロジェクトになります。

### 並行コストの増大

旧と新を並行で走らせる期間が長いほど、コストは重くなります。

### 内部混乱と抵抗

将来役割が見えない人は不安を抱え、抵抗も強まります。

### 新しい技術的負債

急ぎすぎた再利用が、新しい場所で別の負債を生むことがあります。

## 🧠 **戦略的示唆**

- **価値保存**: 廃棄とは違い、レガシーの中に閉じ込められた価値を救い出す
- **漸進的進化**: 急停止が難しいとき、進化を使って慣性を崩せる
- **内向きの毒性対処**: 外部へ押し出す戦略ではなく、社内で整理する戦略である
- **将来成長の準備**: レガシー制約を外すことで、新しい価値流へ資源を回せる

## ❓ **問うべきこと**

- このレガシーはどんな部品でできているか
- どの部品がまだ価値を持ち、どこへ転用できるか
- 維持コストと組み替えコストのどちらが妥当か
- 人、技術、データをどこへ再配置するのが最も効くか
- 従業員への影響をどう公正に扱うか
- 移行中の技術・運用リスクは何か
- 完了までの節目と期限は何か

## 🔀 **関連戦略**

- [**Disposal of Liability**](/strategies/dealing-with-toxicity/disposal-of-liability) - 再利用せず切り離す方向の対照戦略
- [**Sweat & Dump**](/strategies/dealing-with-toxicity/sweat-and-dump) - 外部へ押し出して短期価値を取る別ルート
- [**Value Chain Disaggregation and Re-aggregation**](/strategies/dealing-with-toxicity/value-chain-disaggregation-and-re-aggregation) - より大きな価値連鎖再設計の一部としてリファクタリングを使うことがある
- [Pig in a Poke](/strategies/dealing-with-toxicity/pig-in-a-poke) - 毒性を隠して外へ出す危うい対照戦略

## ⛅ **関連する状勢パターン**

- [すべては進化する](/climatic-patterns/everything-evolves) – 関係: レガシーは進化に伴って組み替えか処分を迫られる
- [特性は変化する](/climatic-patterns/characteristics-change) – 関係: 価値を失う部分と残る部分が分かれてくる
- [成功が慣性を生む](/climatic-patterns/past-success-breeds-inertia) – 関係: 過去の成功が必要な整理を遅らせる
- [効率がイノベーションを可能にする](/climatic-patterns/efficiency-enables-innovation) – 関係: 古い制約を除くことで新しい余力が生まれる
- [高次システムは新たな価値源を生む](/climatic-patterns/higher-order-systems-create-new-sources-of-worth) – 関係: 救い出した部品が新しい上位システムで価値を持つ

## 📚 **参考文献**

- business process re-engineering などの文献は、業務構造の分解と再設計という点で近い
- *Dual Transformation* は、既存事業の能力を新しい成長へ移す組織変換として参考になる
