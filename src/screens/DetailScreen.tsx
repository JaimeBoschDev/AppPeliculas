import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';
import {RootStackParams} from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

const ScreenHeigth = Dimensions.get('screen').height;

export const DetailScreen = ({route}: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  console.log(movie);

  return (
    <ScrollView>
      <View style={styles.ImageContainer}>
        <Image style={styles.imagePoster} source={{uri}} />
      </View>
      <View style={styles.TittleContainer}>
        <Text style={styles.subTitle}>{movie.original_title} </Text>
        <Text style={styles.Title}>{movie.title} </Text>
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
});
