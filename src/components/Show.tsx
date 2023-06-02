import React from "react";
import { IShowProps } from "./index.types";

/**
 * A component that conditionally renders content based on the `when` prop.
 *
 * When `when` is `true`, it renders the `children` prop.
 * When `when` is `false` and a `fallback` prop is provided, it renders the `fallback` prop.
 *
 * @example
 * ```tsx
 * <Show when={isLoading} fallback={<LoadingSpinner />}>
 *   <Content />
 * </Show>
 * ```
 *
 * @param when - Determines whether to show or hide the content.
 * @param fallback - The content to be displayed when `when` is `false`.
 * @param children - The content to be displayed when `when` is `true`.
 * @returns The rendered content based on the `when` prop.
 */

const Show = ({ when, fallback, children }: IShowProps) => {
  if (!when && fallback) return <>{fallback}</>;
  if (when) return <>{children}</>;

  return null;
};

export default Show;
