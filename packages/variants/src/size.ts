import { variant } from "styled-system";

export enum SizeProp {
  XS = "xs",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  XL = "xl",
}

export const sizeVariants = variant({
  prop: "size",
  variants: {
    [SizeProp.XS]: {
      fontSize: "0.75em",
    },
    [SizeProp.SMALL]: {
      fontSize: "0.9em",
    },
    [SizeProp.MEDIUM]: {
      fontSize: "1em",
    },
    [SizeProp.LARGE]: {
      fontSize: "1.2em",
    },
    [SizeProp.XL]: {
      fontSize: "1.5em",
    },
  },
});
