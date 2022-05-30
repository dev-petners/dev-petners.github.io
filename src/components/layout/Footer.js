import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">연락처</h2>
        <p className="mt-5">
          <a href="mailto:dev@petners.co.kr">dev@petners.co.kr</a>
        </p>
      </div>
      {/* <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">약관</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://codebushi.com">개인정보보호</a>
          </li>
          <li>
            <a href="https://codebushi.com">Privacy Policy</a>
          </li>
        </ul>
      </div> */}
      <div className="text-sm font-semibold">
        <p>주식회사 컴페니온</p>
        사업자 등록번호: 433-81-02454 | 대표: 강태경
        <br />
        서울특별시 강남구 테헤란론 123, 6층 610호 (역삼동, 여삼빌딩)
      </div>
    </div>
  </footer>
);

export default Footer;
