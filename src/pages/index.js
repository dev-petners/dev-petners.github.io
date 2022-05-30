import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const Index = () => (
  <Layout>
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">펫트너스</h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            "The best optimization recommend for pet"
          </p>
          <p>
            다양한 반려동물들의 생애주기별 데이터를 모아 가장 개인화된 제품을 추천함으로 만족감과
            소비되는 시간을 줄이고 건강한 반려세대의 삶을 유지시킨다.
          </p>
          {/* <p className="mt-8 md:mt-12" style={{ marginBottom: '2rem' }}>
            <Button size="lg">더 알아보기</Button>
          </p> */}
        </div>
        <div className="lg:w-1/2">
          <img src="https://cdn.pixabay.com/photo/2016/10/10/14/13/dog-1728494_960_720.png" />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
      <div className="container mx-auto text-center">
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-md">동물의약외품 판매</p>
              <p className="text-sm">진단없이 빠르고 손쉽게 구매할수 있는 의약외품</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-md">가격비교</p>
              <p className="text-sm">입양시 필요한 다양한 용품들의 가격비교</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-md">교육 컨텐츠</p>
              <p className="text-sm">초보 부모들에게 필요한 행동과 맞춤 정보들</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-md">커뮤니티</p>
              <p className="text-sm">무엇이든 물어보세요</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section className="container mx-auto my-20 py-24 bg-gray-200 rounded-lg text-center">
      <h3 className="text-3xl font-semibold">분양샵 입점 문의</h3>
      <p className="mt-8">
        <a href="mailto:dev@petners.co.kr">문의하기</a>
      </p>
    </section>
  </Layout>
);

export default Index;
