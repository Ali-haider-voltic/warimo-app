import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Albert Sans", serif;
    background-color: ${({ theme }) => theme.colors.bgcolor};
  }
    .add-shape{
    background-image: url('./bg-union-shape.png');
        background-repeat: no-repeat;
    background-size: 17%;
    background-position: 0px 33px;
}
    .add-bg-image{
        background-image: url('./bg-shape.png');
        background-repeat: no-repeat;
    background-size: 5%;
    background-position: right;
    }

.pricing-title {
  position: relative;
  font-size:20px;
  text-align: center;
  color: #131313;
}

.pricing-title::after {
  content: '';
  position: absolute;
  width:117px;
  height: 1px;
  background: linear-gradient(90deg, #FC5A3F 0%, #F4F1EC 100%);
  top: 50%;
  transform: translateY(-50%);
}

.pricing-title::before {
  content: '';
  position: absolute;
  width: 117px;
  height: 1px;
  background: linear-gradient(90deg, #F4F1EC 0%, #FC5A3F 100%); /* Reversed gradient */
  top: 50%;
  transform: translateY(-50%);
}

.pricing-title::before {
  left: -122px; /* Adjust the spacing from the text */
}

.pricing-title::after {
  right: -122px; /* Adjust the spacing from the text */
}
  .bg-dotted{
     background-image: url('./bg-dotted.png');
            background-repeat: no-repeat;
    background-size: 100%;
    height:200px;
    border-radius:10px;
    background-position: center
  }

`;

export default GlobalStyle;
