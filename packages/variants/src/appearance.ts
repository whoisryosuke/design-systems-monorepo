import { variant } from "styled-system";

export enum AppearanceProp {
  // Brand styles
  PRIMARY = "xs",
  SECONDARY = "small",
  // State / Status styles
  SUCCESS = "success",
  MESSAGE = "message",
  WARNING = "warning",
  DANGER = "danger",
}

export const appearanceVariants = variant({
  prop: "appearance",
  variants: {
    [AppearanceProp.PRIMARY]: {
      color: "white",
      bg: "green",
    },
    [AppearanceProp.SECONDARY]: {
      color: "white",
      bg: "orange",
    },
  },
});
