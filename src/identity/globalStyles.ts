import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .no-scroll {
    overflow:hidden;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
    touch-action: manipulation;
  }

  * {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  main {
    flex: 1 0 auto;
    transition: all 250ms ease;
  }

  nav {
    flex-shrink:0;
    z-index: 1000;
  }

  footer {
    flex-shrink: 0;
    z-index: 999;
  }

  body {
    background: linear-gradient(250deg, #7b2ff7, #ff7f50);
    background-repeat: no-repeat;
    color: white;
    line-height: 1;
    font-family: sans-serif;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html, body, #__next {
    height: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  strong {
    font-weight: bold;
  }
`;
