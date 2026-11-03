// Übersicht 위젯: GitHub Pages 의 fx.html(환율)을 바탕화면에 띄웁니다.
// 사용법: ~/Library/Application Support/Übersicht/widgets/ 에 넣고, 위치·크기는 아래 className 에서 조절하세요.

const URL = "https://yu-byeong-woo.github.io/widget/fx.html";

export const refreshFrequency = false; // iframe 이 스스로 갱신

export const className = `
  left: 40px;
  top: 280px;
  width: 340px;
  height: 300px;
`;

export const render = () => (
  <iframe
    src={URL}
    style={{ width: "100%", height: "100%", border: 0, background: "transparent" }}
  />
);
