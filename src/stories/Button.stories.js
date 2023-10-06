import SVG from "react-inlinesvg";
import Button from "./Button.jsx";
import { IconPlus, IconBrackets } from "@codexteam/icons";
// import { Meta } from "@storybook/blocks";

export default {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    controls: {
      type: "solid",
    },
  },
  argTypes: {
    type: {
      options: ["solid", "outline", "soft", "ghost"],
      control: { type: "radio" },
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    style: {
      options: ["primary", "secondary", "danger"],
      control: { type: "radio" },
    },
    isDisabled: {
      control: { type: "boolean" },
    },
  },
};

const defaultArgs = {
  type: "solid",
  size: "medium",
  style: "primary",
  isDisabled: false,
};

export const Default = {
  args: {
    ...defaultArgs,
    children: <span className="button__label">Button</span>,
  },
};

export const Leading = {
  args: {
    ...Default.args,
    iconType: "leading",
    children: (
      <>
        <SVG className="button__icon" src={IconPlus} />
        <span className="button__label">Button</span>
      </>
    ),
  },
};

export const Trailing = {
  args: {
    ...Default.args,
    iconType: "trailing",
    children: (
      <>
        <span className="button__label">Button</span>
        <SVG className="button__icon button__icon_type_brackets" src={IconBrackets} />
      </>
    ),
  },
};

export const LeadingTrailing = {
  args: {
    ...Default.args,
    iconType: "leading-trailing",
    children: (
      <>
        <SVG className="button__icon" src={IconPlus} />
        <span className="button__label">Button</span>
        <SVG className="button__icon button__icon_type_brackets" src={IconBrackets} />
      </>
    ),
  },
};

export const Standalone = {
  args: {
    ...Default.args,
    iconType: "standalone",
    children: <SVG className="button__icon" src={IconPlus} />,
  },
};
