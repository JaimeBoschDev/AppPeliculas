import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '2b90dd3cb423cd20d84d076cd5d3598b',
    lenguage: 'es-ES',
  },
});

export default movieDB;
