import styles from "./Image.module.scss";

interface IImageProps {
  width?: number;
  height?: number;
  alt?: string;
  src?: string;
}

const Image = ({ ...props }: IImageProps) => {
  return (
    <div className={styles.imageWrapper}>
      <img className={styles.image} alt={props.alt || "image"} {...props} />
    </div>
  );
};

export default Image;
