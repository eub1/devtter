import css from "styled-jsx/css";

import { colors, fonts, breakpoints } from "../../styles/theme";
import { addOpacityToColor } from "../../styles/utils";

const backgroundColor = addOpacityToColor(colors.primary, 0.3);
// console.log(backgroundColor);

export const globalStyles = css.global`
  html,
  body {
    background-image: radial-gradient(${backgroundColor} 1px, #fdfdfd 1px),
      radial-gradient(${backgroundColor} 1px, #fdfdfd 1px);
    background-position: 0 0, 50px 50px;
    background-size: 30px 30px;
    padding: 0;
    margin: 0;
    font-family: ${fonts.base};
  }
  * {
    box-sizing: border-box;
  }
`;

export default css`
  div {
    display: grid;
    height: 100vh;
    place-items: center;
  }

  main {
    background: #fff;
    border-radius: 8px 3px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    /* para mobile */
    height: 100%;
    width: 100%;
  }
  /* cuando pasamos el breakpoint la caja se hace mas chica, por defecto en mobile, es 100% */
  @media (min-width: ${breakpoints.mobile}) {
    main {
      height: 90vh;
      width: ${breakpoints.mobile};
    }
  }
`;
