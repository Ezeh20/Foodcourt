import styles from "./Input.module.scss";
import eye from "../../../public/assets/eye.svg";
import Image from "../Image";

interface Type {
  label: string;
  id: string;
  type: string;
  icon?: boolean;
  placeHolder?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const Input = ({
  label = "some label",
  id,
  type,
  icon,
  placeHolder = "some placeholder",
  onClick,
  ...props
}: Type) => {
  return (
    <div className={styles.main}>
      <label htmlFor={id} className={styles.label}>{label}</label>
      <div className={styles.inputBg}>
        <input
          id={id}
          type={type}
          placeholder={placeHolder}
          {...props}
          className={styles.input}
        />
        {icon ? (
          <button type="button" onClick={onClick}>
            <Image src={eye} alt="eye" className={styles.eye} />
          </button>
        ) : undefined}
      </div>
    </div>
  );
};
