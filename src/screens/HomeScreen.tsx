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
  const {peliculasCine, isLoading} = useMovies();
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
            data={peliculasCine}
            renderItem={({item}: any) => <MoviePoster movie={item} />}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
            sliderWidth={windowWidth}
          />
        </View>

        <HorizontalSlider movies={peliculasCine} title="En cine" />

        <HorizontalSlider movies={peliculasCine} />

        <HorizontalSlider movies={peliculasCine} title="En cine" />

        <HorizontalSlider movies={peliculasCine} title="En cine" />
      </View>
    </ScrollView>
  );
};
