import React from "react";
import styled from "styled-components";
import {
  compose,
  typography,
  space,
  color,
  layout,
  variant,
} from "styled-system";

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

const Button = styled("button")(
  {
    appearance: "none",
    fontFamily: "inherit",
    backgroundColor: "teal",
  },
  variant({
    variants: {
      primary: {
        color: "white",
        bg: "green",
      },
      secondary: {
        color: "white",
        bg: "orange",
      },
    },
  }),
  compose(typography, space, color, layout)
);

export default Button;
