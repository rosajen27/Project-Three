import axios from 'axios';

export default {
    getArticle: function (query) {
        return axios.get('http://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'apiKey=963fe769d8ae46b09a3a518d9078f0de');
    }
}