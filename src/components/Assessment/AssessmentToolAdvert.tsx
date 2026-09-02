const AssessmentToolAdvert = ({ strategyName }) => (
  <div className="card-demo" style={{ marginTop: '1.5rem', maxWidth: '400px' }}>
    <div className="card" style={{ backgroundColor: 'var(--ifm-color-emphasis-0)' }}>
      <div className="card__header">
        <h3>🚦 「{strategyName}」セルフ評価ツール</h3>
      </div>
      <div className="card__body">
        <p className="">
          <strong>{strategyName}</strong>を適用する準備がどれだけ整っているかを手早く確認できます。
          マップと組織のシグナルを見ながら、適合度と実行準備を評価します。
        </p>
      </div>
      <div className="card__footer">
        <a href="#assessment-tool">
          <button className="button button--primary button--block">
            評価を始める
          </button>
        </a>
      </div>
    </div>
  </div>
);

export default AssessmentToolAdvert;
