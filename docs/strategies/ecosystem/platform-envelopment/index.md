---
title: プラットフォーム包摂（Platform Envelopment）
description: プラットフォーム事業者が、他プラットフォームの機能を統合・束ねたり、自分の利用者と直接競合したりして影響力を広げる戦略。
tags:
- platform-envelopment
- ecosystem
- platform
- bundling
- absorption
- integration
authors:
- dave-hulbert
stages:
- Product
- Commodity/Utility
goals:
- Build ecosystem leverage
- Unlock new growth
- Defend your position
pressures:
- Competitive attack underway
- Ecosystem fragmentation
- Facing dominant incumbent
leadership_focus:
- Platform stewardship
- Disciplined portfolio management
- Narrative control
quick_signals:
- 隣接サービスが、自社ユーザー基盤から過大な価値を取っている。
- パートナーが monetise する中核体験を、自社ならもっと滑らかに出せる。
- 顧客が、自分で継ぎ合わせるより統合された体験を求めている。
momentum_moves:
- プラットフォームデータを分析し、付着率と利幅の高いサービスを見つける。
- 自社ネイティブ代替を、優先表示や価格優遇つきで出す。
- ユーザーが摩擦なく bundled service へ移れる migration path を用意する。
watch_outs:
- 吸収される開発者や販売者を遠ざけること。
- self-preferencing と見なされ、規制対応が必要になること。
- 事業範囲を広げすぎて、コアプラットフォーム体験を壊すこと。
effort_level: Enterprise Transformation
time_horizon: Long-term positioning
---

**プラットフォーム事業者が、他プラットフォームの機能を統合・束ねたり、自分の利用者と直接競合したりして、市場影響力と価値回収を広げる戦略です。**

これは Simon Wardley の [On 61 different forms of gameplay](https://blog.gardeviance.org/2015/05/on-61-different-forms-of-gameplay.html) で明示されてはいませんが、実務上はよく見られるエコシステム戦略です。

## 🤔 **解説**

### プラットフォーム包摂とは何か

プラットフォーム包摂とは、プラットフォーム事業者が市場影響力と価値回収を拡大するために、次のどちらかを行うことです。

- 他プラットフォームや隣接サービスの機能を統合・バンドルする
- 自分の利用者や出店者、開発者と競合する類似サービスを自ら提供する

既存の重なったユーザー基盤を利用し、エコシステムを広げつつ、競合の立ち位置を狭めます。

### 戦略意図

この戦略の狙いは、TAM の拡大、消費者余剰のより大きな回収、scope の経済の獲得、市場支配力の強化です。隣接や下流の価値増分サービスへ踏み込み、顧客ロックインを深めます。

### Wardley Map 上ではどう見えるか

このゲームプレイは、コンポーネントの位置と進化を直接変えます。もともと第三者が提供していた capability を、自社バリューチェーンへ取り込みます。第三者の `Custom` や `Product` が、自社プラットフォームの標準 `Product`、場合によっては `Commodity` にまで移ることがあります。

これは次のような変化を伴います。

- **水平拡張:** WeChat のように、決済、ゲーム、配車などを横へ広げる
- **垂直統合:** Amazon Retail のように、Marketplace 出店者と直接競合する

新しいコンポーネントを足したり、既存機能をより深く統合したりして、ユーザーが必要とする一連の体験をプラットフォーム内へ巻き取ります。結果として、以前は外部に散っていた capability が、より見えやすく、より標準化された形でコア提供物に含まれます。

バンドリングは単なる販売施策ではなく、複数 capability を一つの提供物へ再配置する構造変更です。これによって個別 component への競合アクセスを閉じることができます。

## 🗺️ **実例**

### WeChat のエコシステム拡張

WeChat はメッセージングから始まり、決済、配車、ゲーム、マーケットプレイスを統合し、幅広い行動を一つのアプリ内へ包摂しました。

### Amazon Marketplace と Amazon Retail

Amazon はもともと第三者販売者へ顧客接点を提供していましたが、成功カテゴリでは AmazonBasics のような自社ブランドを出し、自分の利用者と直接競合するようになりました。

### Microsoft: Internet Explorer と Office365

Microsoft はかつて Internet Explorer を Windows にバンドルし、ブラウザ市場で大きな優位を得ました。近年では Office365 で個別アプリとクラウドサービスをまとめ、サブスクリプション基盤へ包摂しています。

### Google のハードウェアとアプリ生態系

Google は Pixel 端末で Android メーカーと競合しつつ、Maps、Gmail、Drive など Play Store 上の第三者アプリとも競合するアプリ群を自ら提供しています。

### 滴滴出行の垂直統合

滴滴出行は、ガソリンスタンドや整備工場などへ投資し、ドライバーが必要とする周辺サービスまで価値連鎖へ包摂しました。

### Tujia のハイブリッドモデル

Tujia は第三者ホストの物件を載せるだけでなく、自社管理物件も運営し、一部の利用者基盤と直接競合しています。

## 🚦 **使いどころ**

<Assessment strategyName="Platform Envelopment">
  <MapSignals>
    <li>プラットフォームがすでに大きなユーザー基盤を持っている。</li>
    <li>そのユーザー基盤が、隣接サービスの利用者と大きく重なっている。</li>
    <li>統合すると価値提案が大きく強まる機能が見えている。</li>
    <li>地図上で、現在はユーザーが提供する custom service を標準 platform feature にできる。</li>
  </MapSignals>
  <Readiness>
    <li>新機能を統合・開発するエンジニアリングとプロダクト資源がある。</li>
    <li>チャネルコンフリクトやパートナー離反を管理する覚悟がある。</li>
    <li>競争地形と antitrust 含意を理解している。</li>
    <li>プラットフォームのアーキテクチャが新サービス統合に耐える。</li>
  </Readiness>
</Assessment>

### 向くとき

- 既存の大きなユーザー基盤を leverage できるとき
- 対象機能とのユーザー重なりが大きいとき
- 新機能追加で大きな economies of scope が得られるとき
- 包摂が強い customer lock-in を生むとき
- 競合がアクセスする重要市場セグメントを閉じられるとき

### 避けるとき

- antitrust 監視のリスクが高すぎるとき
- 既存ユーザーやパートナーを敵に回し、コア事業を傷つけるとき
- 多角化の複雑性が便益を上回るとき
- 対象機能がコアとの相乗を持たないとき
- 統合・吸収コストが重すぎるとき

## 🎯 **リーダーシップ**

### 中核課題

攻撃的な拡張と市場集中を進めながら、規制、パートナー離反、組織複雑化を制御することです。自分のエコシステムと競合しながらも、そのエコシステムを壊してはなりません。

### 必要なスキル

- [Community and ecosystem stewardship](/leadership-skills/community-and-ecosystem-stewardship) — ユーザー、開発者、第三者との関係を読む
- [Strategic sensemaking](/leadership-skills/strategic-sensemaking) — 包摂すべき隣接市場を見抜く
- [Risk management and resilience](/leadership-skills/risk-management-and-resilience) — antitrust と backlash を抑える
- [Platform strategy and network effects](/leadership-skills/platform-strategy-and-network-effects) — 新サービスを platform に組み込む
- [Strategic communication and storytelling](/leadership-skills/strategic-communication-and-storytelling) — 社内外へ rationale を説明する

### 倫理面

市場力を leverage する以上、競争抑制や選択肢減少のリスクが常にあります。利用者との直接競合は、透明で公正に扱わなければ搾取的と見なされます。価値創造と monopolistic な価値抽出の線引きが重要です。

## 📋 **進め方**

1. 包摂候補を見つける。ユーザーニーズ、隣接市場、競合脆弱性を分析する
2. 戦略適合とリスクを評価する。TAM、lock-in、competitive positioning、antitrust を見る
3. 手段を決める。Integration、Bundling、Absorption のどれで行くか選ぶ
4. 必要 capability を内製または買収で確保する
5. 市場へ投入し、採用、競合反応、エコシステム影響を観測する
6. 利用者とパートナーへ役割とルールを説明し、関係悪化を最小化する

## 📈 **成功指標**

- TAM の拡大
- 包摂サービスの利用率
- 新サービスの売上成長
- 顧客維持率の向上
- 包摂領域での market share 改善

## ⚠️ **失敗しやすい点**

### antitrust 監視

支配的プラットフォームの aggressive な包摂は、規制当局の強い関心を呼びます。

### パートナー離反

自分の利用者やパートナーと競合し始めると、信頼が崩れ、エコシステム全体が痩せることがあります。

### コア事業の放置

新領域に気を取られすぎると、コアプラットフォームが弱ります。

### 統合の複雑性

技術、チーム、事業モデルの統合は重く、遅延や UX 劣化につながりやすいです。

### ユーザーニーズの誤読

ユーザーが本当に望んでいないものを包摂すると、コストだけ増えます。

## 🧠 **戦略的示唆**

### 文脈がすべて

この戦略は普遍解ではありません。市場構造、既存権力、ユーザー特性、規制環境で大きく成否が変わります。

### ユーザーデータは両刃

コアプラットフォームの利用データを、包摂先で優位を取るために使うのは一般的ですが、同時にプライバシーと規制の焦点にもなります。

### 革命より進化

成功する包摂は、しばしば API や緩い提携から始まり、徐々に tighter bundling や direct absorption へ進みます。

### 開放と統制の均衡

最初はオープンにして参加者を集め、後から selective に閉じて価値を回収する。この転換管理を誤ると、コミュニティが離れます。

## ❓ **問うべきこと**

- 現在のユーザーと、包摂したいサービスの利用者はどれだけ重なるか
- 本当に superior で統合された体験を出せるか、それともただ便利そうに束ねるだけか
- 対象市場の既存プレイヤーはどう反応し、どう返すか
- 既存パートナーや開発者へどんな影響があるか
- 規制リスクはどの程度で、どう備えるか
- この包摂は、長期のプラットフォーム戦略にどう位置づくか

## 🔀 **関連戦略**

- [**Tower and Moat**](/strategies/ecosystem/tower-and-moat) - 既存の塔の周囲へ moat を築く手段になりうる
- [**Bundling**](/strategies/user-perception/bundling) - 包摂の代表的メカニズム
- [**Innovate, Leverage, Commoditize (ILC)**](/strategies/ecosystem/innovate-leverage-commoditize) - leverage した基盤から新領域へ進み、標準化する流れ
- [**Raising Barriers to Entry**](/strategies/defensive/raising-barriers-to-entry) - 包摂が新規参入障壁を高める
- [**抱き込みと拡張（Embrace and Extend）**](/strategies/ecosystem/embrace-and-extend) - 外部機能を取り込む点で近いが、より標準支配的
- [Value Chain Disaggregation and Re-aggregation](/strategies/dealing-with-toxicity/value-chain-disaggregation-and-re-aggregation) - 外部で分散していた機能を再統合する

## ⛅ **関連する状勢パターン**

- [効率がイノベーションを可能にする](/climatic-patterns/efficiency-enables-innovation) – トリガー: コアが効率化すると隣接領域へ広がる余力が生まれる
- [高次システムは新たな価値の源泉を作る](/climatic-patterns/higher-order-systems-create-new-sources-of-worth) – 影響: 既存部品の上に乗る新しい価値源泉を包摂する
- [新しい価値領域へ資本が流れる](/climatic-patterns/capital-flows-to-new-areas-of-value) – トリガー: 新価値が見える場所へプラットフォームが資本投入する
- [すべては進化する](/climatic-patterns/everything-evolves) – 影響: ユーザーニーズと市場変化が包摂を駆動する

## 📚 **参考文献**

- [Platform Competition: Envelopment Strategies](https://www.jstor.org/stable/41261793) - platform envelopment の基礎論文
- [The Business of Platforms](/books/the-business-of-platforms) - プラットフォーム戦略の解説
- [WeChat's World](https://www.economist.com/business/2016/08/06/wechats-world) - WeChat 包摂戦略の紹介
- [Aggregation Theory](https://stratechery.com/2015/aggregation-theory/) - platform power の文脈
