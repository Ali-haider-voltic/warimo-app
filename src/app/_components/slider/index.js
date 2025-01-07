'use client';
import React, { useEffect, useState } from 'react';
import { Slider } from 'antd';
import SliderWrapper from './style';

const Index = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <SliderWrapper>
    <span className='text-[18px] font-medium'>Number of users</span>
      {isClient && (
        <Slider
          defaultValue={30}
          tooltip={{
            open: true,
            formatter: value => `${value}`,
          }}
        />
      )}
    </SliderWrapper>
  );
};

export default Index;
