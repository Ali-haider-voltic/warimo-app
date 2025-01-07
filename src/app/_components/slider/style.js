'use client'
import styled from 'styled-components';

const SliderWrapper=styled.div` .ant-slider-track {
    background-color: #FC5A3F;
    height: 12px;
    border-radius: 12px;
}

.ant-slider-rail {
    background-color: #D9D9D9;
    height: 12px
}

.rc-slider-handle {
    width: 20px;
    height: 20px;
    background-color: #FC5A3F;
    border: 2px solid #ffff;
    opacity: 1;
}

.ant-slider-handle::after {
    width: 20px;
    height: 20px;
    background-color: #FC5A3F;
    border: 2px solid #fff;
    box-shadow: none;
}

.ant-slider:hover {
    .ant-slider-track {
        background-color: #FC5A3F;
        
    }
}

.ant-slider-handle:hover {
    &::after {
        width: 20px;
        height: 20px;
        background-color: #FC5A3F;
        border: 2px solid #fff;
        box-shadow: none;
        outline: none;
        inset-inline-start: 0;
        inset-block-start: 0;
    }
}

.ant-slider-handle:focus::after {
    width: 20px;
    height: 20px;
    background-color: #FC5A3F;
    border: 2px solid #fff;
    box-shadow: none;
    outline: none;
    inset-inline-start: 0;
    inset-block-start: 0;
}
`
export default SliderWrapper;