import React from "react";
import PropTypes from "prop-types";
import { Slot } from "@radix-ui/react-slot";
import "../styles/Button.css"; // External CSS

const Button = React.forwardRef(
  (
    {
      className = "",
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const classes = ["btn-base", `btn-${variant}`, `btn-${size}`, className]
      .filter(Boolean)
      .join(" ");

    return <Comp className={classes} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";

Button.propTypes = {
  variant: PropTypes.oneOf([
    "default",
    "destructive",
    "outline",
    "secondary",
    "ghost",
    "link",
  ]),
  size: PropTypes.oneOf(["default", "sm", "lg", "icon"]),
  asChild: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
