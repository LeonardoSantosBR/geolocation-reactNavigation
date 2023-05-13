import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Map from './src/screens/map/map';
import Chat from './src/screens/chat/chat';

const Tab = createBottomTabNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="map" component={Map} options={{headerShown: false}} />
        <Tab.Screen
          name="chat"
          component={Chat}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
