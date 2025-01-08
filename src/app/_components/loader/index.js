'use client'
import React from 'react';

const Loader = () => {
  return (
    <div className="loader-container">
      <span className="loader"></span>
      <style jsx>{`
        .loader-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(255, 255, 255, 0.8);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
        }

        .loader {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          position: relative;
          animation: rotate 1s linear infinite;
        }

        .loader::before,
        .loader::after {
          content: "";
          box-sizing: border-box;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          border: 5px solid #000;
          animation: prixClipFix 2s linear infinite;
        }

        .loader::after {
          top: 8px;
          left: 8px;
          right: 8px;
          bottom: 8px;
          transform: rotate(180deg);
          border-color: #FF3D00;
        }

        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes prixClipFix {
          0% {
            clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
          }
          50% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
          }
          75%, 100% {
            clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
