import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';

import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const {width, height} = Dimensions.get('screen');

function Map(): JSX.Element {
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{width: width, height: height}}
        zoomEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Map;
