// Übersicht 위젯: GitHub Pages 에 올린 clock.html 을 바탕화면에 띄웁니다.
// 사용법: URL 만 본인 주소로 바꾸고, ~/Library/Application Support/Übersicht/widgets/ 에 넣으세요.
// 위치·크기는 아래 className 의 left/top/width/height 로 조절합니다.

const URL = "https://<GITHUB_ID>.github.io/<REPO>/clock.html"; // TODO: 실제 주소로 교체

export const refreshFrequency = false; // iframe 이 스스로 갱신하므로 위젯 재실행 불필요

export const className = `
  left: 40px;
  top: 40px;
  width: 340px;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
`;

export const render = () => (
  <iframe
    src={URL}
    style={{ width: "100%", height: "100%", border: 0, background: "transparent" }}
  />
);
