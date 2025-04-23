// src/pages/Chapter1.jsx
import { useState, useEffect } from 'react';
import '../App.css'; // 공통 스타일

function Chapter1() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState(() => {
    const saved = localStorage.getItem('my-links');
    return saved ? JSON.parse(saved) : [];
  });

  // localStorage 자동 저장
  useEffect(() => {
    localStorage.setItem('my-links', JSON.stringify(links));
  }, [links]);

  // 이모지 매핑
  const emojiMap = {
    공부: '📖', 시험: '📝', 숙제: '📝', 문제: '❓', 강의: '🎙️', 책: '📚', 정리: '🗂️', 요약: '✍️',
    컴퓨터: '💻', 코드: '💾', 디버깅: '🐞', 프로젝트: '📁', 깃허브: '🐙', 로딩: '⏳',
    음악: '🎵', 영화: '🎬', 드라마: '📺', 방송: '📻', 마이크: '🎤', 카메라: '📷', 유튜브: '▶️', 사진: '🖼️',
    사과: '🍎', 바나나: '🍌', 치킨: '🍗', 피자: '🍕', 요리: '🍳', 커피: '☕', 차: '🍵', 맥주: '🍺', 술: '🍶',
    여행: '✈️', 비행기: '🛫', 지도: '🗺️', 호텔: '🏨', 바다: '🌊', 산: '🏔️', 캠핑: '🏕️',
    강아지: '🐶', 고양이: '🐱', 곰: '🐻', 사자: '🦁', 토끼: '🐰', 코끼리: '🐘', 공룡: '🦖',
    운동: '🏃', 러닝: '👟', 축구: '⚽', 농구: '🏀', 등산: '🥾', 요가: '🧘', 춤: '💃', 달리기: '🏃‍♂️', 게임: '🎮',
    전화: '📞', 문자: '💬', 시계: '⏰', 일정: '📅', 메모: '🗒️', 기분: '😎', 기념일: '🎉',
  };

  // 키워드 포함 시 이모지 붙이기
  const getEmojiTitle = (text) => {
    const found = Object.entries(emojiMap).find(([keyword]) => text.includes(keyword));
    return found ? `${found[1]} ${text}` : text;
  };

  const handleAdd = () => {
    if (title.trim() && url.trim()) {
      const titledWithEmoji = getEmojiTitle(title);
      setLinks([...links, { title: titledWithEmoji, url }]);
      setTitle('');
      setUrl('');
    }
  };

  const handleDelete = (indexToDelete) => {
    setLinks(links.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="chapter1-container">
      <div className="card">
        <h2>📘 CHAPTER 1 – 숙제 링크 추가</h2>

        <div className="input-group">
          <input
            type="text"
            placeholder="제목 입력 (예: 숙제 2)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL 입력 (예: https://example.com)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button onClick={handleAdd}>➕ 추가</button>
        </div>

        <div className="link-list">
          <div className="link-item">
    <a href="https://homework2-js1v.vercel.app/" target="_blank" rel="noopener noreferrer">
      🍎 사과
    </a>
    <button className="delete-button" onClick={() => handleDelete(0)}>
      🗑
    </button>
  </div>
    <div className="link-item">
    <a href="https://homework3-liart-ten.vercel.app/" target="_blank" rel="noopener noreferrer">
      🐻 곰
    </a>
    <button className="delete-button" onClick={() => handleDelete(0)}>
      🗑
    </button>
  </div>
    <div className="link-item">
    <a href="https://homework4-teal.vercel.app/" target="_blank" rel="noopener noreferrer">
      ✈️ 여행
    </a>
    <button className="delete-button" onClick={() => handleDelete(0)}>
      🗑
    </button>
  </div>
  /* AUTO_INSERT_HERE */
          {links.map((link, index) => (
            <div key={index} className="link-item">
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                🔗 {link.title}
              </a>
              <button
                className="delete-button"
                onClick={() => handleDelete(index)}
              >
                🗑
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chapter1;
