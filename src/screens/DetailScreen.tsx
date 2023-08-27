import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';

import {useMovieDetails} from '../hooks/useMovieDetails';
import {MovieDetails} from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const ScreenHeigth = Dimensions.get('screen').height;

export const DetailScreen = ({route, navigation}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie);

  const {isLoading, movieFull, cast} = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={styles.ImageContainer}>
        <Image style={styles.imagePoster} source={{uri}} />
      </View>
      <View style={styles.TittleContainer}>
        <Text style={styles.subTitle}>{movie.original_title} </Text>
        <Text style={styles.Title}>{movie.title} </Text>
      </View>
      {isLoading ? (
        <ActivityIndicator size={50} color="gray" style={{marginTop: 8}} />
      ) : (
        <MovieDetails movieFull={movieFull!} cast={cast} />
      )}

      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon name="arrow-back-outline" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ImageContainer: {
    width: '100%',
    height: ScreenHeigth * 0.7,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    paddingBottom: 2,
  },
  imagePoster: {
    flex: 1,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  TittleContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  subTitle: {
    fontSize: 16,
    color: 'black',
    opacity: 0.6,
  },
  Title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    margin: 15,
    backgroundColor: 'grey',
    borderRadius: 50,
    padding: 2,
  },
});
