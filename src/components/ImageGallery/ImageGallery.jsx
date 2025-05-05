import ImageCard from "./ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
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
