import React from "react";
import Case from "../Case/Case";
import { ISwitchComponent } from "../../../shared/index.types";

/**
 * A component that conditionally renders content based on the Switch.Case `when` prop.
 *
 * When `when` is `true`, it renders the matching `Switch.Case` component.
 * When no matching `Switch.Case` is found and a `fallback` prop is provided, it renders the `fallback` prop.
 *
 * @example
 * ```tsx
 * <Switch fallback={<LoadingSpinner />}>
 *   <Switch.Case when={false}>Test</Switch.Case>
 *   <Switch.Case when={false}>Test2</Switch.Case>
 *   <Switch.Case when={true}>Test3</Switch.Case>
 *   <Switch.Case when={false}>Test4</Switch.Case>
 * </Switch>
 * ```
 *
 * @param fallback - The content to be displayed when `when` is `false`.
 * @param children - The children must be Switch.Case component.
 * @returns The rendered content based on the Switch.Case `when` prop.
 */

const Switch: ISwitchComponent = ({ fallback, children }) => {
  const activeChildren = children.find((child) => React.isValidElement(child) && child.type === Case && child.props.when);

  if (activeChildren) return <>{activeChildren}</>;
  if (!activeChildren && fallback) return <>{fallback}</>;

  return null;
};

Switch.Case = Case;

export default Switch;
