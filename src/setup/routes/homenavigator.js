import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../modules/screens/home';
import RestaurantDetails from '../../modules/screens/restaurantDetails';
import AddressSearching from '../../modules/screens/adressSearching';
import { primaryColor } from '../config'
import { TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const HomeNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',

        headerStyle: { backgroundColor: primaryColor },
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: 'Restaurant App',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Ionicons name="menu" style={{ fontSize: 25, color: '#fff', marginLeft: 10 }} />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetails}
        options={{
          title: 'Restaurant Details',
        }}
      />
      <Stack.Screen
        name="AddressSearching"
        component={AddressSearching}
        options={{
          gestureEnabled: false,
          title: 'Search List',
        }}
      />
    </Stack.Navigator>
  );
}
export default HomeNavigator