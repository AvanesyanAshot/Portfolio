import clsx from "clsx";
import * as React from "react";
import css from "./Button.module.css";
import { ISize } from "../../utils/size";

type IButtonKind = "standart" | "icon";
type IButtonStyle = "standart" | "ghost";

export const kindMapper: { [key in IButtonKind]: string } = {
  standart: css.standart,
  icon: css.icon,
};

export const sizeMapper: { [key in ISize]: string } = {
  sm: css.sm,
  md: css.md,
  lg: css.lg,
};

type IButtonProps = {
  size?: ISize;
  kind?: IButtonKind;
  bStyle?: IButtonStyle;
  loading?: boolean;
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
} & React.ButtonHTMLAttributes<Element>;

const Button: React.FC<IButtonProps> = ({
  size = "md",
  kind = "standart",
  bStyle = "standart",
  children,
  disabled,
  Icon,
  ...props
}) => {
  if (kind === "icon") {
    return (
      <button
        className={clsx(css.button, kindMapper[kind], {
          [css.ghost]: bStyle === "ghost",
        })}
        {...props}
      >
        {Icon && <Icon className={css.button__icon} />}
      </button>
    );
  }

  return (
    <button
      className={clsx(css.button, kindMapper[kind], sizeMapper[size], {
        [css.ghost]: bStyle === "ghost",
      })}
      disabled={disabled}
      {...props}
    >
      {Icon && <Icon className={css.button__icon} />}
      {children}
    </button>
  );
};

export default Button;
