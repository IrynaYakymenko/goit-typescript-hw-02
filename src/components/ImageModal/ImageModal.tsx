import Modal from "react-modal";
import { UnsplashImage } from "../../types";

interface ImageModalProps {
  image: UnsplashImage;
  modalIsOpen: boolean;
  closeModal: () => void;
}

const customStyles: Modal.Styles = {
  overlay: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "999999",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    backdropFilter: "blur(5px)",
  },
  content: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0",
    padding: 0,
    width: "800px",
    height: "fit-content",
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    color: "white",
    inset: 0,
  },
};

Modal.setAppElement("#root");

const ImageModal = ({ image, modalIsOpen, closeModal }: ImageModalProps) => {
  console.log(image);
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <img src={image.urls.regular} alt={image.alt_description} />
    </Modal>
  );
};

export default ImageModal;
