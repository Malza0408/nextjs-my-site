import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
    }
    html,
    body {
        width: 100%;
        height: 100%;
    }
    html {
        font-size: 62.5%;
    }

    ${({ theme }) => {
      return css`
        body {
          font-family: ${theme.fonts.family};
          font-size: ${theme.fonts.size.small};
          line-height: 1.4;
          cursor: default;
        }
        h1 {
          font-size: ${theme.fonts.size.large};
          font-weight: ${theme.fonts.weight.bold};
          color: ${theme.colors.black};
          margin: 1.6rem;
        }
        h2 {
          font-size: ${theme.fonts.size.medium};
          font-weight: ${theme.fonts.weight.semiBold};
          color: ${theme.colors.black};
          margin: 0.8rem;
        }
        h3 {
          font-size: ${theme.fonts.size.regular};
          font-weight: ${theme.fonts.weight.regular};
          color: ${theme.colors.black};
          margin: 0.8rem;
        }
        h4 {
          font-size: ${theme.fonts.size.small};
          font-weight: ${theme.fonts.weight.regular};
          color: ${theme.colors.black};
          margin: 0.6rem;
        }
        h5 {
          font-size: ${theme.fonts.size.micro};
          font-weight: ${theme.fonts.weight.regular};
          color: ${theme.colors.black};
          margin: 0.4rem;
        }
        p {
          font-size: ${theme.fonts.size.regular};
          font-weight: ${theme.fonts.weight.regular};
          color: ${theme.colors.black};
          margin: 0.4rem;
        }

        a {
          text-decoration: none;
          color: ${theme.colors.white};
        }

        img {
          display: block;
        }

        button {
          background-color: transparent;
          cursor: pointer;
          border: ${theme.border.regular} solid ${theme.colors.black};
          border-radius: ${theme.borderRadius.bold};
          padding: 0.8rem 1.2rem;
          margin: 2rem 0rem 0rem 0rem;
          font-weight: ${theme.fonts.weight.bold};
        }
      `;
    }}
    .image {
      border-radius: 50%;
    }
`;
