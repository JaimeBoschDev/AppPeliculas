import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Cast} from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({actor}: Props) => {
  const uri = `http://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{uri}} style={styles.ImageActor} />}
      <View style={styles.ContainerText}>
        <Text style={styles.texto}>{actor.name}</Text>
        <Text style={styles.textoSecond}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginRight: 20,
    paddingRight: 8,
    marginTop: 8,
    height: 50,
  },
  ContainerText: {
    marginLeft: 10,
    paddingTop: 5,
  },
  texto: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  textoSecond: {
    color: 'black',
    fontSize: 11,
    opacity: 0.7,
  },
  ImageActor: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
});
