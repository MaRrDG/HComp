import React from "react";
import { IScrollToProps } from "./index.types";

/**
 * A button component that scrolls the window to a specific direction or position.
 *
 * When clicked, it triggers a scroll action using the specified scroll options.
 *
 * @param title - The title of the ScrollTo button. The title can be a string or a JSX.Element
 * @param to - The direction to scroll. Can be one of: "up", "down", "left", or "right". Defaults to "up".
 * @param scrollWidth - The scroll width. Can be "max" or a specific number. Defaults to "max".
 * @param onClick - The callback function to be called when the button is clicked.
 * @param className - The CSS class name for the ScrollTo button.
 * @param isClickable - Specifies whether the ScrollTo button is clickable. Defaults to true.
 * @param behavior - The scrolling behavior. Can be "smooth" or "auto". Defaults to "smooth".
 *
 * @example
 * ```tsx
 * <ScrollTo
 *   title="Scroll to Top"
 *   to="up"
 *   scrollWidth={200}
 *   onClick={handleClick}
 *   className="scroll-button"
 *   isClickable={true}
 *   behavior="smooth"
 * />
 * ```
 */

const ScrollTo = ({ title = "ScrollTo", to = "up", scrollWidth = "max", onClick, className, isClickable = true, behavior = "smooth" }: IScrollToProps) => {
  const scrollOptions: ScrollToOptions = {
    top: ["up", "down"].includes(to) ? (scrollWidth === "max" ? 200 : scrollWidth) : 0,
    left: ["right", "left"].includes(to) ? (scrollWidth === "max" ? 200 : scrollWidth) : 0,
    behavior: behavior,
  };

  return (
    <button
      onClick={() => {
        if (!isClickable) return;
        window.scrollTo(scrollOptions);
        if (onClick) onClick();
      }}
      className={className}
    >
      {title}
    </button>
  );
};

export default ScrollTo;
