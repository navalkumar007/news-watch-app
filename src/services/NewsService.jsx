import http from "../http-common";

const getNews = () => {
    return http.get("/news");
}

export default {
    getNews
};