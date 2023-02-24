import styled, { createGlobalStyle, css } from "styled-components";
import { device } from "./media";

const style = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: "FWD", -apple-system, "sans-serif", "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    font-style: normal;

    // @media (max-width: 768px) {
    //   font-size: 16px;
    //   line-height: 22px;
    // }
  }

  body {
    overflow-x: hidden;
  }

  // code {
  //   font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
  //     monospace;
  // }

  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  // .tooltip-container {
  //   padding: 0;
  //   border-radius: 8px;
  //   border: none;
  //   box-shadow: (0px 16px 40px rgba(24, 48, 40, 0.1));
  // }

  // .tooltip-arrow[data-placement*="right"]::before {
  //   border-color: transparent rgba(24, 48, 40, 0.1) transparent transparent;
  //   border-width: 0.5rem 0.4rem 0.5rem 0;
  // }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  // h1 {
  //   font-size: 36px;
  //   font-weight: 500;
  //   line-height: 44px;
  // }

  // h2 {
  //   font-size: 24px;
  //   font-weight: 500;
  //   line-height: 32px;
  // }

  // h3 {
  //   font-size: 18px;
  //   font-weight: 500;
  //   line-height: 24px;
  // }

  // h4 {
  //   font-size: 16px;
  //   font-weight: 500;
  //   line-height: 24px;
  // }

  // h5 {
  //   font-size: 16px;
  //   font-weight: 500;
  //   line-height: 24px;
  // }

  // h6 {
  //   font-size: 14px;
  //   font-style: normal;
  //   font-weight: normal;
  //   line-height: 22px;
  // }

  // .h7 {
  //   font-style: normal;
  //   font-weight: 700;
  //   font-size: 16px;
  //   line-height: 125%;
  // }

  // .h8 {
  //   font-style: normal;
  //   font-weight: 700;
  //   font-size: 14px;
  //   line-height: 125%;
  // }

  // .tiny {
  //   font-size: 10px;
  // }

  input,
  textarea,
  button,
  select {
    font-family: "FWD", -apple-system, "sans-serif", "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 24px;
    border: 0 none;
    outline: 0 none;
    background: transparent;

    :disabled {
      opacity: 1;
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  input,
  textarea {
    font-size: 16px;
    line-height: 24px;
    ::placeholder {
      color: ${({ theme }) => theme.color.input.placeholder};
    }
  }

  // label {
  //   font-size: 13px;
  //   line-height: 18px;
  //   font-weight: 500;
  // }

  a {
    color: inherit;
    text-decoration: none;
    position: relative;

    /* :after {
      content: "";
      display: block;
      width: 0px;
      height: 1px;
      left: auto;
      top: 100%;
      right: 0px;
      position: absolute;
      background: currentColor;
      transition: width 0.3s ease-in-out;
    }

    :hover {
      :after {
        width: 100%;
        left: 0px;
        right: auto;
      }
    } */
  }

  // .container {
  //   max-width: 1200px;
  //   margin-left: auto;
  //   margin-right: auto;
  // }

  // p {
  //   font-style: normal;
  //   font-weight: normal;
  //   margin-top: 0px;
  //   margin-bottom: 16px;
  //   color: ${({ theme }) => theme.color.text.body};

  //   :last-child {
  //     margin-bottom: 0px;
  //   }
  // }

  // hr {
  //   border-style: solid;
  //   margin: 20px 0px;
  //   border-bottom-width: 0px;
  //   color: ${({ theme }) => theme.color.page.border};
  // }

  // img {
  //   max-width: 100%;
  //   height: auto;
  //   display: block;
  // }

  dl,
  ol,
  ul {
    margin-top: 0;
    margin: 0;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.color.text.body};
  }

  .hide-mobile {
    @media ${device.mobile} {
      display: none !important;
    }
  }

  .hide-desktop {
    @media ${device.noMobile} {
      display: none !important;
    }
  }

  .text-center {
    text-align: center !important;
  }

  .text-left {
    text-align: left !important;
  }

  .link {
    :hover {
      text-decoration: underline;
    }
  }

  .danger {
    color: ${({ theme }) => theme.color.status.red};
  }

  .blue {
    color: ${({ theme }) => theme.color.status.blue};
  }

  .green {
    color: ${({ theme }) => theme.color.status.green};
  }

  .primary-color {
    color: ${({ theme }) => theme.color.status.primary};
  }

  .bold {
    font-weight: 700;
  }
  .primary {
    color: ${({ theme }) => theme.color.status.primary};
  }

  .semibold {
    font-weight: 600;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .align-items-center {
    align-items: center;
  }

  .justify-content-center {
    justify-content: center;
  }

  .justify-content-between {
    justify-content: space-between;
  }

  .justify-content-around {
    justify-content: space-around;
  }

  .justify-content-end {
    justify-content: flex-end;
  }

  .w-100 {
    width: 100%;
  }

  .flex-1 {
    flex: 1;
  }

  .flex-2 {
    flex: 2;
  }

  .flex-column {
    flex-direction: column;
  }

  .mr-3 {
    margin-right: 36px !important;
  }

  .mr-2 {
    margin-right: 24px !important;
  }

  .mr-1 {
    margin-right: 12px !important;
  }

  .mr-0 {
    margin-right: 0px !important;
  }

  .mt-3 {
    margin-top: 36px !important;
  }

  .mt-2 {
    margin-top: 24px !important;
  }

  .mt-0 {
    margin-top: 0px !important;
  }

  .mt-1 {
    margin-top: 12px !important;
  }

  .ml-3 {
    margin-left: 36px !important;
  }

  .ml-2 {
    margin-left: 24px !important;
  }

  .ml-1 {
    margin-left: 12px !important;
  }

  .mb-3 {
    margin-bottom: 36px !important;
  }

  .mb-2 {
    margin-bottom: 24px !important;
  }

  .mb-1 {
    margin-bottom: 12px !important;
  }

  .mb-0 {
    margin-bottom: 0px !important;
  }

  .Toastify__toast-container--bottom-center {
    width: 80vw;
  }

  .Toastify__close-button {
    padding: 12px;
  }

  .Toastify__close-button > svg {
    height: 20px;
    width: 20px;
  }

  .Toastify__toast {
    display: flex;
    align-items: center;

    background: #183028;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    font-weight: 450;
    font-size: 16px;
    line-height: 150%;

    color: white;
  }

  .Toastify__close-button {
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${style}
`;
