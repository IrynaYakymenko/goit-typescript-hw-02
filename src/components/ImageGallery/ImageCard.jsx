import s from "./ImageGallery.module.css";
const ImageCard = ({ image, openModal }) => {
  return (
    <>
      <img
        onClick={() =>
          openModal({ src: image.urls.regular, alt: image.alt_description })
        }
        className={s.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </>
  );
};

export default ImageCard;
