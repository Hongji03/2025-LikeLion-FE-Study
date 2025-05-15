import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FineDust = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const serviceKey = process.env.REACT_APP_API_KEY; // 인코딩되지 않은 키
  console.log("키 확인:", serviceKey);
  const stationName = '분당구';
  const url = `/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty`;

  // 등급 계산 함수
  const getGrade = (value, type) => {
    const v = parseInt(value, 10);
    if (value === '-' || isNaN(v)) return '정보 없음';

    if (type === 'pm10') {
      if (v <= 30) return '좋음';
      if (v <= 80) return '보통';
      if (v <= 150) return '나쁨';
      return '매우나쁨';
    } else if (type === 'pm25') {
      if (v <= 15) return '좋음';
      if (v <= 35) return '보통';
      if (v <= 75) return '나쁨';
      return '매우나쁨';
    }
    return '정보 없음';
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            serviceKey,
            returnType: 'json',
            numOfRows: 1,
            pageNo: 1,
            stationName,
            dataTerm: 'DAILY',
            ver: '1.0',
          },
        });
        console.log("API 응답 전체:", response.data);
        setData(response.data.response.body.items[0]);
      } catch (err) {
        setError('데이터를 불러오는 중 오류가 발생했습니다.');
        console.log(err);
      }
    };

    fetchData();
  }, []);

  if (error) return <p>{error}</p>;
  if (!data) return <p>로딩 중...</p>;

  return (
    <div>
      <h2>📍 분당구 미세먼지 정보</h2>
      <p>📅 측정 시간: {data.dataTime}</p>
      <p>🌫 미세먼지(PM10): {data.pm10Value} ㎍/㎥ ({getGrade(data.pm10Value, 'pm10')})</p>
      <p>🌁 초미세먼지(PM2.5): {data.pm25Value} ㎍/㎥ ({getGrade(data.pm25Value, 'pm25')})</p>
    </div>
  );
};

export default FineDust;
