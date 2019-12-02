// axios를 통해서 영화 데이터를 가져오는 function을 만들꺼에요.
// baseURL : https://api.themoviedb.org/3/            O
// get : movie/popular
// params : api_key=6f468133ad08eef8c7a50210567d8a1b  O
// params : language=en-US                            O
import axios from "axios";

// axios에게 설정을 준다.
//  1) 기본 URL
//  2) params

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: { api_key: "6f468133ad08eef8c7a50210567d8a1b", language: "en-US" }
});

export const movies = {
  getPopular: () => api.get("movie/popular"),
  getNowPlaying: () => api.get("movie/now_playing")
};
