import s from "./ImageGallery.module.css";
import { UnsplashImage } from "../../types";

interface ImageCardProps {
  image: UnsplashImage;
  openModal: (image: UnsplashImage) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, openModal }) => {
  return (
    <>
      <img
        onClick={() => openModal(image)}
        className={s.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </>
  );
};

export default ImageCard;
