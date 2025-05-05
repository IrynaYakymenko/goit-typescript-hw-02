import axios from "axios";

export type Photo = {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
    full: string;
  };
  user: {
    name: string;
  };
};

export type ImageResponse = {
  photos: Photo[];
  total_pages: number;
};

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _EGuUK-NK7hw0Zhka9-YrtB0GHtEDPbk55Q6wyT0fWI",
  },
});

export const getImage = async (query: string, page: number) => {
  const { data } = await instance.get("search/photos", {
    params: {
      query,
      page,
      per_page: 12,
    },
  });
  return {
    photos: data.results,
    total_pages: data.total_pages,
  };
};
