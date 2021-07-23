import React from 'react'
import { Text, View, FlatList, Dimensions } from 'react-native';
import styles from './styles'
import cars from './cars'
import CarItem from '../CarItems';

const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        keyExtractor={item => item.id}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('screen').height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default CarsList