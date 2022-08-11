import axios from "axios";

const KEY = "AIzaSyDRBVrNl4catsFMv6next-0lTk25vg9Bu0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
