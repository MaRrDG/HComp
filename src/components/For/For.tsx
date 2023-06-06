import React from "react";
import { IForProps } from "../../shared/index.types";

/**
 * A component that iterates over an array of items and renders content for each item.
 *
 * When `items` is empty or not provided, it renders the `fallback` prop.
 * Otherwise, it maps over the `items` array, calling the `children` function for each item,
 * passing the item itself and its index as arguments.
 *
 * @example
 * ```tsx
 * <For items={users} fallback={<div>No users found.</div>}>
 *   {(user, index) => (
 *     <div key={index}>{user.name}</div>
 *   )}
 * </For>
 * ```
 *
 * @param items - An array of items to iterate over.
 * @param fallback - The content to be displayed when `items` is empty or not provided.
 * @param children - A function that receives each item and its index, and returns the content to be rendered for that item.
 * @returns The rendered content based on the `items` prop.
 */

const For = <T,>({ items, fallback, children }: IForProps<T>) => {
  if (!items || items.length === 0) return <>{fallback}</>;
  return <>{items.map((item, idx) => children(item, idx))}</>;
};

export default For;
