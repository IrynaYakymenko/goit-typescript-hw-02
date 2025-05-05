import "./App.css";

import { Toaster } from "react-hot-toast";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { getImage } from "./servise/unsplashAPI";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [imageModal, setImageModal] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { photos, total_pages } = await getImage(query, page);
        if (!total_pages) {
          setIsEmpty(true);
          return;
        }
        setImages((prev) => [...prev, ...photos]);
        setShowLoadMore(page < total_pages);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSubmit = (query) => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setError("");
    setShowLoadMore(false);
    setIsEmpty(false);
  };

  const handleClick = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setImageModal(image);
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage error={error} />}
      {showLoadMore && <LoadMoreBtn handleClick={handleClick} />}
      {isEmpty && <div>We couldn't find ${query}</div>}
      {imageModal && (
        <ImageModal
          image={imageModal}
          modalIsOpen={Boolean(imageModal)}
          closeModal={() => openModal(null)}
        />
      )}
    </>
  );
}

export default App;
