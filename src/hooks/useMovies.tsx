import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBNowPlaying} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [isLoading, setisLoading] = useState(true);
  const [peliculasCine, setPeliculasCine] = useState<Movie[]>([]);

  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const peliculas = resp.data.results;
    setPeliculasCine(peliculas);
    setisLoading(false);
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {
    peliculasCine,
    isLoading,
  };
};
