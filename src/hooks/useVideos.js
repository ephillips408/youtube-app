import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

// const KEY = your key goes here.

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term, // q comes from the Youtube API docs.
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY,
      },
    });

    setVideos(response.data.items);
  };
  
  // Make sure that we return the outputs from the custom hooks.
  return [videos, search];
};

export default useVideos;
