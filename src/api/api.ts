import axios from "axios";
import {languageRequest} from "../utils/requestFormatting";

export const apiNews = {
    /*    getNews(page: number = 1, pageSize: number = 10, q: string) {
            const {request, lang} = requestFormatting(q)
            return fetch(`https://free-news.p.rapidapi.com/v1/search?q=${request}&lang=${lang}&page=${page}&page_size=${pageSize}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "free-news.p.rapidapi.com",
                    "x-rapidapi-key": "6909a2ae32msh30c76d3ea4b29ffp1032c3jsncfa4488de55d"
                }
            })
                .then(response => {
                    return response.json()
                })
                .then(response => {
                    return response.articles
                })
                .catch(err => {
                    console.error(err);
                });

        },*/
    getNews(page: number = 1, pageSize: number = 10, q: string) {
        const lang = languageRequest(q)
        const config = {
            params: {q: q, lang: lang, page: page, page_size: pageSize},
            headers: {
                'x-rapidapi-host': 'free-news.p.rapidapi.com',
                'x-rapidapi-key': '6909a2ae32msh30c76d3ea4b29ffp1032c3jsncfa4488de55d'
            }
        }
        return axios.get('https://free-news.p.rapidapi.com/v1/search', config).then((response) => {
            return response.data;
        }).catch(function (error) {
            console.error(error);
        });
    }
};
