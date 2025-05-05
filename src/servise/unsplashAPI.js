import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID _EGuUK-NK7hw0Zhka9-YrtB0GHtEDPbk55Q6wyT0fWI",
  },
});

export const getImage = async (query, page) => {
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
