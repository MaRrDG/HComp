import { CSSProperties, ReactNode } from "react";
import Case from "../components/SwitchGroup/Case/Case";

/**
 * Props for the `Show` component.
 */
export interface IShowProps {
  /**
   * Determines whether to show or hide the content.
   */
  when: boolean;

  /**
   * The content to be displayed when `when` is `false`.
   */
  fallback?: ReactNode;

  /**
   * The content to be displayed when `when` is `true`.
   */
  children: ReactNode;
}

/**
 * Props for the `For` component.
 */
export interface IForProps<T> {
  /**
   * An array of items to iterate over.
   */
  items?: T[];

  /**
   * The content to be displayed when `items` is empty or not provided.
   */
  fallback?: ReactNode;

  /**
   * A function that receives each item of type `T` and its index,
   * and returns the content to be rendered for that item.
   */
  children: (item: T, index?: number) => ReactNode;
}

/**
 * The properties for the `Case` component.
 */
export interface ICaseProps {
  /**
   * Determines whether to show or hide the content.
   */
  when?: boolean;
  /**
   * The cases to be evaluated and displayed based on the `when` property
   */
  children: ReactNode;
}

/**
 * The properties for the `Switch` component.
 */
export interface ISwitchProps {
  /**
   * The content displayed when no active case is found
   */
  fallback?: ReactNode;
  /**
   * The cases to be evaluated and displayed based on the `when` property
   */
  children: ReactNode[];
}

/**
 * The `Switch` component allows displaying only one active case from a set of cases.
 */
export interface ISwitchComponent extends React.FC<ISwitchProps> {
  /**
   * The `Case` component for defining individual cases within the `Switch`.
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
  Case: typeof Case;
}

/**
 * The properties for the `ScrollTo` component.
 */
export interface IScrollToProps {
  /**
   * The title of the ScrollTo button.
   */
  title?: React.ReactNode;

  /**
   * The direction to scroll. Can be one of: "up", "down", "left", or "right".
   */
  to?: "up" | "down" | "left" | "right";

  /**
   * The scroll width. Can be "max" or a specific number.
   */
  scrollWidth?: "max" | number;

  /**
   * The callback function to be called when the button is clicked.
   */
  onClick?: () => void;

  /**
   * The CSS class name for the ScrollTo button.
   */
  className?: string;

  /**
   * Specifies whether the ScrollTo button is clickable. Defaults to true.
   */
  isClickable?: boolean;

  /**
   * The scrolling behavior. Can be "smooth" or "auto". Defaults to "smooth".
   */
  behavior?: "smooth" | "auto";

  /**
   * The style prop for the ScrollTo Button
   */
  style?: CSSProperties;
}
