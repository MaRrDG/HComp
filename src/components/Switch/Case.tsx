import React from "react";
import { ICaseProps } from "../index.types";

/**
 * A component that conditionally renders content based on the `when` prop, and you can use it inside Switch component as Switch.Case
 *
 * When `when` is `true`, it renders the `children` prop.
 *
 * @example
 * ```tsx
 * <Switch.Case when={condition}>
 *   <Content />
 * </Switch.Case>
 * ```
 *
 * @param when - Determines whether to show or hide the content.
 * @param children - The content to be displayed when `when` is `true`.
 * @returns The rendered content based on the `when` prop.
 */

const Case = ({ when, children }: ICaseProps) => {
  if (!when) return null;
  return <>{children}</>;
};

export default Case;
