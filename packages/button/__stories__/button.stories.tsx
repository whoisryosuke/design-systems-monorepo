import React from "react";
// Ignore because SC type pkg is broken for now
// @ts-ignore
import styled from "styled-components";
import { variant } from "styled-system";
import { action } from "@storybook/addon-actions";
import { Button } from "../src/button";

export default {
  title: "Button",
  component: Button,
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Width = () => (
  <Button onClick={action("clicked")} width="20em">
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Primary = () => (
  <Button onClick={action("clicked")} variantColor="primary">
    Hello Button
  </Button>
);

export const Secondary = () => (
  <Button onClick={action("clicked")} variantColor="secondary">
    Hello Button
  </Button>
);

export const Color = () => (
  <Button onClick={action("clicked")} bg="rebeccapurple" color="#FFF">
    Hello Button
  </Button>
);

export const Spacing = () => (
  <Button onClick={action("clicked")} ml={3} p={3}>
    Hello Button
  </Button>
);

export const AsAnotherElement = () => (
  <Button as="a" href="#" ml={3} p={3}>
    Hello Button
  </Button>
);

export const Customizing = () => {
  const StyledButton = styled(Button)`
    color: red;
  `;
  return (
    <StyledButton onClick={action("clicked")} ml={3} p={3}>
      Submit
    </StyledButton>
  );
};

// Adds duplicate styles to DOM, since new variant doesn't
// technically override the styles - it stacks/cascades them
export const OverridingVariants = () => {
  const StyledButton = styled(Button)`
    color: red;
    ${variant({
      prop: "variantColor",
      variants: {
        primary: {
          color: "white",
          bg: "#000",
        },
        secondary: {
          color: "white",
          bg: "purple",
        },
      },
    })}
  `;
  return (
    <StyledButton
      onClick={action("clicked")}
      variantColor="primary"
      ml={3}
      p={3}
    >
      Submit
    </StyledButton>
  );
};
