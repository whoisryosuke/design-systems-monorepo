import React from "react";
// Ignore because SC type pkg is broken for now
// @ts-ignore
import styled from "styled-components";
import { Box, Assign, BoxOwnProps } from "zenny-ui-box";
import {
  SizeProp,
  sizeVariants,
  AppearanceProp,
  appearanceVariants,
} from "zenny-ui-variants";

export interface ButtonProps
  extends Assign<React.ComponentPropsWithRef<"button">, BoxOwnProps> {
  size: SizeProp;
  appearance: AppearanceProp;
}

const Button = styled(Box).attrs(() => ({
  // Define props on top of Box
  // Set underlying element as button
  as: "button",
}))<ButtonProps>(
  {
    appearance: "none",
    fontFamily: "inherit",
    backgroundColor: "teal",
  },
  sizeVariants,
  appearanceVariants
);

export default Button;
