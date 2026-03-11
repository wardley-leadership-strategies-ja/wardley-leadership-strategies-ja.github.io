---
title: 標準化ゲーム（Standards Game）
description: 自社技術やプロセスが支配的標準になるまで採用を進め、顧客をロックインし競合を縛る戦略。
tags:
- standards
- markets
- dominance
- competition
- differentiation
- switching costs
- lock-in
authors:
- dave-hulbert
stages:
- Product
- Commodity/Utility
goals:
- Shape the market
- Defend your position
- Build ecosystem leverage
pressures:
- Ecosystem fragmentation
- Facing dominant incumbent
- Customers are nervous about change
leadership_focus:
- Standard stewardship
- Certification and compliance
- Coalition management
quick_signals:
- 非互換な方式が採用や統合を遅らせている。
- すでに多くの partner がコピーする reference implementation を提供している。
- 規制当局や大口顧客が、何が “good” かの明確化を求めている。
momentum_moves:
- open specification と supporting test suite を公開する。
- respected な中立団体へ standard の host を依頼する。
- trust を補強する accreditation や compatibility programme を提供する。
watch_outs:
- 自社都合に見えすぎて、規制反発を招くこと。
- standard 自体を停滞させ、競合に迂回 innovation を許すこと。
- standard 維持の運用負荷を見誤ること。
effort_level: Enterprise Transformation
time_horizon: Long-term positioning
---

**市場標準を意図的に形作り、他者がその方式へ従わざるを得ない状態を作る戦略です。**

> *「市場を標準へ押し込み、他者へ移行コストを作る、あるいは差別化能力を取り去ること。」*
>
> - Simon Wardley

<AssessmentToolAdvert strategyName="Standards Game" />

## 🤔 **解説**

### 標準化ゲームとは何か

標準化ゲームは、自社技術、プロセス、仕様を、その業界の de facto または de jure standard にする意図的な取り組みです。市場を自社標準へ寄せることで、高い switching cost を作り、競合が自分の枠組みの外で innovating する自由を減らします。

これは collaborative body や open approach を通じて open に行うこともあれば、市場支配力を leverage して「それに従うしかない」状態へ持ち込む形でも行われます。

### なぜ使うのか

- **顧客を lock-in する**
- **競合差別化を縛る**
- **ecosystem の進化方向を誘導する**
- **integration friction を減らし、network effect を作る**

### どう使うのか

1. reference implementation や open specification を出し adoption を促す
2. alliance や consortium を組み、正統性を作る
3. 必要なら lobbying や規制関与で policy へ埋め込む
4. standard を継続的に update し、自社 guidance への依存を作る
5. tooling、certification、compatibility programme を提供して参加者を揃える

## 🗺️ **実例**

### USB

Intel などが USB を open standard として推進し、多数の proprietary connector を置き換えました。臨界量を超えると、hardware maker は従うしかなくなりました。

### GSM モバイル標準

欧州の規制当局と telecom 企業は GSM 標準で協調し、roaming と interoperability を可能にしました。これが欧州メーカーに先行優位を与えました。

### Amazon S3 API

S3 の object storage interface は事実上の standard になり、競合クラウドも S3-compatible API を実装せざるを得なくなっています。

## 🚦 **使いどころ**

<Assessment strategyName="Standards Game">
  <MapSignals>
    <li>市場が fragmentation や competing format に苦しんでいる。</li>
    <li>他者が依存したい、または依存せざるを得ない技術を握っている。</li>
    <li>common approach が network effect を生む。</li>
    <li>競合が互いに非互換な alternative へ分かれている。</li>
  </MapSignals>
  <Readiness>
    <li>reference implementation を提供し続けられる。</li>
    <li>規制当局や standards body へ影響力がある。</li>
    <li>brand や market share に adoption を駆動する力がある。</li>
    <li>長期で standard を支え続ける覚悟がある。</li>
  </Readiness>
</Assessment>

### 向くとき

- 共通 standard が customer や partner の friction を大きく減らすとき
- 自社方式を stick させるだけの市場力や alliance があるとき

### 避けるとき

- standard 化が自社の unique value proposition を erode するとき
- market がまだ radically different solution を探索中で、早すぎる標準化が innovation を殺すとき

## 🎯 **リーダーシップ**

### 中核課題

adoption を広げる openness と、自社戦略に沿わせる control の均衡です。

### 必要なスキル

- [Stakeholder alignment and influence](/leadership-skills/stakeholder-alignment-and-influence) — coalition と negotiation を動かす
- [Regulatory and political acumen](/leadership-skills/regulatory-and-political-acumen) — 規制と lobbying を読む
- [Governance and policy design](/leadership-skills/governance-and-policy-design) — technical governance と ecosystem 管理を行う
- [Brand and reputation management](/leadership-skills/brand-and-reputation-management) — communication と market trust を保つ
- [Strategic sensemaking](/leadership-skills/strategic-sensemaking) — 長期 maintenance を見据える

### 倫理面

standard が本当に user と industry needs に資するのか、それとも自社 power 固定の道具なのかを問わなければなりません。透明な governance が lock-in や反競争の疑いを減らします。

## 📋 **進め方**

1. fragmentation や emerging consensus を地図化する
2. reference implementation や specification を公開する
3. partner を集め、consortium を作るか参加する
4. tooling、certification、compliance test を用意する
5. 必要なら規制当局や有力団体へ認知・採用を働きかける
6. backward compatibility を保ちながら standard を進化させる

## 📈 **成功指標**

- 自社 standard 準拠製品・サービスの market share
- standard を採用・認証する partner 数
- 規制や業界文書で自社 standard が参照される頻度
- switching cost による churn 減少
- wider ecosystem の roadmap と方向性への影響力

## ⚠️ **失敗しやすい点**

### adoption 不足

初期採用が弱いと、critical mass へ届かず standard は捨てられます。

### vendor lock-in と見なされる

支配が強すぎると反発と rival standard を呼びます。

### maintenance コストの過小評価

standard は育て続けなければ trust を失います。

### 規制反発

standard を押し付ける動きは antitrust や政治的反発を招きます。

## 🧠 **戦略的示唆**

### standard は chokepoint になる

みなが使う interface を定義すると、変化速度を握り、置き換えられにくくなります。

### タイミングが重要

早すぎれば未熟な方法を固定し、遅すぎれば rival standard が支配している。進化軸のどこにいるかの判断が重要です。

### counterplay に備える

competitor は embrace-and-extend や alternative alliance を作ってきます。継続監視と応答が必要です。

## ❓ **問うべきこと**

- どの組織や規制当局を説得すれば standard に正統性が出るか
- developer や partner へ、どんな adoption incentive を出せるか
- この standard を握ることで、本当に自社が強くなるのか、それとも自分たちを commoditize するのか
- governance と backward compatibility を何年も支えられるか
- competitor の alternative standard にどう応じるか

## 🔀 **関連戦略**

- [オープンアプローチ（Open Approaches）](/strategies/accelerators/open-approaches) – code や process を開くと standard adoption が加速しやすい
- [Defensive Regulation](/strategies/defensive/defensive-regulation) – 法律へ埋め込めば standard がより強くなる
- [Lobbying](/strategies/user-perception/lobbying) – policy maker や industry body の説得
- [Raising Barriers to Entry](/strategies/defensive/raising-barriers-to-entry) – standard compliance 自体が参入障壁になる
- [Designed to Fail](/strategies/poison/designed-to-fail) – rival standard を毒して自分の field を空けることがある
- [協調（Cooperation）](/strategies/accelerators/cooperation) - stakeholder と協働して friction を減らす
- [産業政策（Industrial Policy）](/strategies/accelerators/industrial-policy) - 政府行動で adoption を後押しする
- [ネットワーク効果の活用（Exploiting Network Effects）](/strategies/accelerators/exploiting-network-effects) - network effect が standard を固定する
- [市場育成（Market Enablement）](/strategies/accelerators/market-enablement) - pilot と ecosystem 育成で early uptake を作る
- [競争制限（Limitation of Competition）](/strategies/defensive/limitation-of-competition) - compliance requirement で代替を絞る
- [抱き込みと拡張（Embrace and Extend）](/strategies/ecosystem/embrace-and-extend) - standard を取り込み proprietary extension を重ねる
- [アライアンス（Alliances）](/strategies/ecosystem/alliances) - coalition を組んで標準化を進める
- [両面張り（Playing Both Sides）](/strategies/attacking/playing-both-sides) - 複数 standard camp に関わって柔軟性を保つ
- [Buyer-Supplier Power](/strategies/markets/buyer-supplier-power) - standard 実装支配で buyer / supplier 条件を動かす

## ⛅ **関連する状勢パターン**

- [すべては進化する](/climatic-patterns/everything-evolves) – 関係: standard は commodity 化へ向かう進化に影響する
- [効率がイノベーションを可能にする](/climatic-patterns/efficiency-enables-innovation) – 関係: standard は効率と相互運用性を高め、高次革新を可能にする
- [プロダクトからユーティリティへの移行は断続平衡を示しやすい](/climatic-patterns/shifts-from-product-to-utility-tend-to-demonstrate-a-punctuated-equilibrium) – 関係: standard 成立は utility 化の punctuation point になる
- [競合の行動はゲームを変える](/climatic-patterns/competitors-actions-will-change-the-game) – 関係: competitor は自分たちの standard も立てようとする
- [ひとつのサイズですべてに合うわけではない](/climatic-patterns/no-one-size-fits-all) – 関係: standard は uniformity を目指しても、適用差や niche 差は残る

## 📚 **参考文献**

- [USB Implementers Forum](https://www.usb.org/) – industry coordination による ubiquitous standard の例
- [GSM Association](https://www.gsma.com/) – 規制と industry 協調による mobile standard の事例
- [RFC 2026 – The Internet Standards Process](https://www.rfc-editor.org/rfc/rfc2026) – open standard body の運営プロセス
