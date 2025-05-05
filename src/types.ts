export interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
}

export interface UnsplashAPIResponse {
  total_pages: number;
  photos: UnsplashImage[];
}
