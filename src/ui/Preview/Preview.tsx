import previewImg from "../../assets/preview.png";
import Image from "../Image/Image";

const Preview = () => {
  return <Image width={300} height={200} src={previewImg} alt="Game preview" />;
};

export default Preview;
