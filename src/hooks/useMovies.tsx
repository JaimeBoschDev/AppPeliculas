import React, {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterface';

interface MoviesInter {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setisLoading] = useState(true);
  const [movieState, setMovieState] = useState<MoviesInter>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPromise =
      movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const resps = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMovieState({
      nowPlaying: resps[0].data.results,
      popular: resps[1].data.results,
      topRated: resps[2].data.results,
      upcoming: resps[3].data.results,
    });

    setisLoading(false);
  };

  useEffect(() => {
    // now_playing
    getMovies();
  }, []);

  return {
    isLoading,
    ...movieState,
  };
};
