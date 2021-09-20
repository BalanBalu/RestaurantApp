import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RestaurantDetails from '../../modules/screens/restaurantDetails';
import HomeNavigator from './homenavigator'
import { primaryColor } from '../config'
import AddressSearching from '../../modules/screens/adressSearching';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={HomeNavigator}
        options={{
          headerShown: false
        }}
      />

    </Drawer.Navigator>
  );
}