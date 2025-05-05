import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css";

import { UnsplashImage } from "../../types";

interface ImageGalleryProps {
  images: UnsplashImage[];
  openModal: (image: UnsplashImage) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={s.list}>
      {images.map((image) => {
        return (
          <li className={s.item} key={image.id}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
