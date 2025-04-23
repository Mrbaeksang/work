/* eslint-disable */
// addHomework.cjs
// ✅ Node.js CLI로 Chapter1.jsx 코드에 숙제 링크 JSX 자동 삽입

const fs = require('fs');
const path = require('path');

// --- 1. 명령줄 인자 처리 ---
const args = process.argv.slice(2);
const titleArg = args.find(arg => arg.startsWith('--title='));
const urlArg = args.find(arg => arg.startsWith('--url='));

if (!titleArg || !urlArg) {
  console.error('❌ 사용법: node addHomework.cjs --title="숙제 1" --url="https://example.com"');
  process.exit(1);
}

const title = decodeURIComponent(titleArg.split('=')[1]);
const url = decodeURIComponent(urlArg.split('=')[1]);

// --- 2. 이모지 매핑 ---
const emojiMap = {
  숙제: '📝', 공부: '📖', 문제: '❓', 강의: '🎙️', 책: '📚',
  음악: '🎵', 유튜브: '▶️', 사과: '🍎', 곰: '🐻', 여행: '✈️'
};

const getEmoji = (text) => {
  const found = Object.entries(emojiMap).find(([keyword]) => text.includes(keyword));
  return found ? found[1] : '🔗';
};

const emoji = getEmoji(title);

// --- 3. JSX 코드 생성 ---
const jsxBlock = `  <div className="link-item">
    <a href=\"${url}\" target=\"_blank\" rel=\"noopener noreferrer\">
      ${emoji} ${title}
    </a>
    <button className=\"delete-button\" onClick={() => handleDelete(0)}>
      🗑
    </button>
  </div>\n`;

// --- 4. Chapter1.jsx 파일 위치 지정 ---
const filePath = path.join(__dirname, 'src', 'pages', 'Chapter1.jsx');
let fileContent = fs.readFileSync(filePath, 'utf-8');

// --- 5. 삽입 위치 지정 ---
const insertionPoint = '/* AUTO_INSERT_HERE */';

if (!fileContent.includes(insertionPoint)) {
  console.error('❌ Chapter1.jsx 파일에 /* AUTO_INSERT_HERE */ 주석이 없습니다.');
  process.exit(1);
}

// --- 6. JSX 삽입 및 파일 저장 ---
fileContent = fileContent.replace(insertionPoint, `${jsxBlock}  /* AUTO_INSERT_HERE */`);
fs.writeFileSync(filePath, fileContent);
console.log(`✅ 숙제 링크 추가됨: ${emoji} ${title}`);
