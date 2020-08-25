import axios from "axios";

const KEY = "AIzaSyChEszlNK_RpU-MxNQVNakrw-OI8xhHw3w";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
