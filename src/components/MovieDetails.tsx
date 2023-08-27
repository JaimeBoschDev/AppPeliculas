import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {MovieFull} from '../interfaces/movieInterface';
import {Cast} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import {CastItem} from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <View>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star" size={16} color="gray" />
          <Text style={styles.textoRaiting}> {movieFull.vote_average} </Text>
          <Text style={{...styles.textoRaiting, marginLeft: 5}}>
            - {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>
        <View style={styles.viewSection}>
          <Text style={styles.textoTittle}>Historia</Text>
          <Text style={styles.texto}> {movieFull.overview} </Text>
        </View>
        <View style={styles.viewSection}>
          <Text style={styles.textoTittle}>Presupuesto</Text>
          <Text style={styles.texto}>
            {' '}
            {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
          </Text>
        </View>
        <View style={styles.viewSection}>
          <Text style={styles.textoTittle}>Actores</Text>

          <FlatList
            data={cast}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CastItem actor={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{marginBottom: 20, height: 70}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textoRaiting: {
    color: 'gray',
    fontSize: 9,
    fontWeight: '900',
  },
  viewSection: {
    marginTop: 10,
  },
  textoTittle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  texto: {
    color: 'black',
  },
});
