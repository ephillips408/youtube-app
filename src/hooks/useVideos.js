import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

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
