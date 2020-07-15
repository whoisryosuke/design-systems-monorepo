import React from "react";
import { action } from "@storybook/addon-actions";
import Button from "./button";

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
  <Button onClick={action("clicked")} variant="primary">
    Hello Button
  </Button>
);

export const Secondary = () => (
  <Button onClick={action("clicked")} variant="secondary">
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
