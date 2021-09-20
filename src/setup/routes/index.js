import React, { PureComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './drawerNavigator';
import { View, ActivityIndicator } from 'react-native';




class AppRouter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userLoggedIn: false,
      isLoading: true
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    );
  }
}



export default AppRouter
