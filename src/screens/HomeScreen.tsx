import React from 'react';
import {View, ActivityIndicator, Dimensions, ScrollView} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {useMovies} from '../hooks/useMovies';
import {MoviePoster} from '../components/MoviePoster';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {HorizontalSlider} from '../components/HorizontalSlider';
import {GradientBackground} from '../components/GradientBackground';
import {getImageColors} from '../helpers/getColores';

const {width: windowWidth} = Dimensions.get('window');

export const HomeScreen = () => {
  const {nowPlaying, isLoading, popular, topRated, upcoming} = useMovies();
  const {top} = useSafeAreaInsets();

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [Primary, Secondary] = await getImageColors(uri);
    console.log({Primary, Secondary});
  };

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <ActivityIndicator color="red" size={100} />
      </View>
    );
  }

  return (
    <GradientBackground>
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
    </GradientBackground>
  );
};
