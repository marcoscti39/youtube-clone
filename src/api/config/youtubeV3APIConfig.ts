import { rapidKey } from "./rapidKey";

export const youtubeV3APIOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": rapidKey,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const youtubeV3APIBaseURL = "https://youtube-v31.p.rapidapi.com";
