import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(10);
  const [isRunning, setIsRunning] = useState(true);
  const progress = (timeLeft / 10) * 100;
  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - 0.01;
          return newTime > 0 ? newTime : 0;
        });
      }, 10);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);
  const containerStyle = {
    position: 'relative',
    width: '50px',
    height: '25px',
  };
  const svgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };
  const contentStyle = {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2px',
  };
  const timeStyle = {
    fontSize: '10px',
    color: '#FC5A3F',
    fontWeight: 500,
    lineHeight: '16px',
  };
  return (
    <div style={containerStyle}>
      <svg
        style={svgStyle}
        viewBox="0 0 43 16"
      >
        <rect
          x="0.5"
          y="0.5"
          width="42"
          height="15"
          rx="8"
          fill="none"
          stroke="#FC5A3F"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <rect
          x="0.5"
          y="0.5"
          width="42"
          height="15"
          rx="8"
          fill="none"
          stroke="#FC5A3F"
          strokeWidth="0.5"
          strokeDasharray="114"
          strokeDashoffset={114 - (114 * progress) / 100}
          style={{transition: 'all 100ms'}}
        />
      </svg>
      <div style={contentStyle}>
        <span style={timeStyle}>{timeLeft.toFixed(2)}</span>
        <Timer style={{width: '10px', height: '10px', color: '#FC5A3F'}} />
      </div>
    </div>
  );
};
export default CountdownTimer;
