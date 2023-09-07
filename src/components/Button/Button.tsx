import styles from "./Button.module.scss";

interface Button {
  label: string;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Button = ({
  label = "some label",
  className,
  type,
  onClick,
  ...props
}: Button) => {
  return (
    <button
      className={`${styles.btn} ${className}`}
      type={type}
      {...props}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
