// src/styles/shared/media.js
import { css } from "styled-components";
import { breakpoints } from "./breakpoints";

export const media = {
  up:
    key =>
    (...args) =>
      css`
        @media (min-width: ${breakpoints[key]}) {
          ${css(...args)}
        }
      `,
  down:
    key =>
    (...args) =>
      css`
        @media (max-width: ${breakpoints[key]}) {
          ${css(...args)}
        }
      `,
  between:
    (minKey, maxKey) =>
    (...args) =>
      css`
        @media (min-width: ${breakpoints[minKey]}) and (max-width: ${breakpoints[maxKey]}) {
          ${css(...args)}
        }
      `,
};
