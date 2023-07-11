import { createGlobalStyle } from 'styled-components';
import globaltokenCSS from '../tokens.css';

export default createGlobalStyle`

  ${globaltokenCSS}
  
  html, body {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    line-height: 1.25rem;
    font-weight: 400;
    font-family: 'Roc Grotesk Regular';
    font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); 
    background: ${({ theme }) => theme.colors.background_primary};
    color: ${({ theme }) => theme.colors.text_primary};
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 36px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.text_primary};
    border-radius: 36px;
  }
`;
