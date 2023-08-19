import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {Movie} from '../interfaces/movieInterface';

interface Props {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MoviePoster = ({movie, height = 420, width = 300}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <View
      style={{
        width: width,
        height: height,
        marginHorizontal: 8,
      }}>
      <View style={styles.ContainerImage}>
        <Image style={styles.image} source={{uri}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ContainerImage: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
