import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function terms() {
  const [current, setCurrent] = useState(1);
  const [term, setTerm] = useState({ 1: '', 2: '' });

  useEffect(() => {
    if (term[current] === '') {
      axios(`https://api-dev.pawsona.co.kr/v1/term/${current}`).then((res) => {
        setTerm((prev) => ({ ...prev, [current]: res.data.data?.content }));
      });
    }
  }, [current]);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '0 20px' }}>
      <div style={{ margin: '20px 0' }}>
        <label>파우소나 </label>
        <select onChange={(e) => setCurrent(e.target.value)}>
          <option value={1}>서비스 이용약관</option>
          <option value={2}>개인정보 처리방침</option>
        </select>
      </div>
      <div style={{ whiteSpace: 'pre-line' }}>{term[current]}</div>
    </div>
  );
}
