import styles from "./Button.module.scss";

interface Button {
  label: string;
  className?: string;
}

export const Button = ({
  label = "some label",
  className,
  ...props
}: Button) => {
  return (
    <button className={`${styles.btn} ${className}`} {...props}>
      {label}
    </button>
  );
};
