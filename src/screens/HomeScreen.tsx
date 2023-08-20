import React from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalSlider} from '../components/HorizontalSlider';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, isLoading, popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20}}>
        <View style={{height: 440}}>
          <Carousel
            data={nowPlaying}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
            sliderWidth={windowWidth}
          />
        </View>

        <HorizontalSlider
          movies={topRated}
          title="Top de Peliculas más vistas"
        />
        <HorizontalSlider movies={popular} title="Populares" />
        <HorizontalSlider movies={upcoming} title="Próximas" />
      </View>
    </ScrollView>
  );
};
