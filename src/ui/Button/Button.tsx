import styles from "./Button.module.scss";

interface IButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  variant?: "primary" | "secondary";
  title: string;
  width?: string;
  className?: string;
  Icon?: React.ReactNode;
}

const Button = ({
  title,
  width,
  variant = "primary",
  className,
  Icon,
  ...props
}: IButtonProps) => {
  return (
    <div className={styles.buttonWrapper} style={{ width }}>
      <button
        className={`${styles.button} ${styles[variant]} ${className || ""}`}
        aria-label={title}
        {...props}
      >
        {Icon && <span className={styles.icon}>{Icon}</span>}
        <span className={styles.title}>{title}</span>
      </button>
    </div>
  );
};

export default Button;
