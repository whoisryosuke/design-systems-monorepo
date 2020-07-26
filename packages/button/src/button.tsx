import React from "react";
// Ignore because SC type pkg is broken for now
// @ts-ignore
import styled from "styled-components";
import { compose, typography, space, color, layout } from "styled-system";
import {
  SizeProp,
  sizeVariants,
  AppearanceProp,
  appearanceVariants,
} from "zenny-ui-variants";

type ButtonProps = JSX.IntrinsicElements["button"] & {
  children: React.ReactNode;
  onClick: () => void;
  size: SizeProp;
  appearance: AppearanceProp;
};

const Button = styled("button")<ButtonProps>(
  {
    appearance: "none",
    fontFamily: "inherit",
    backgroundColor: "teal",
  },
  sizeVariants,
  appearanceVariants,
  compose(typography, space, color, layout)
);

export default Button;
