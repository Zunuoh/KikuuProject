import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
// import MessageScreen from './src/screens/messageScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import OutletScreen from './src/screens/OutletScreen';
import MykikuuScreen from './src/screens/MykikuuScreen';
import ClothingScreen from './src/newPages/clothingScreen';
import CartScreen from './src/screens/CartScreen';
import ShoeScreen from './src/newPages/shoeScreen';
import BagScreen from './src/newPages/bagScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import SettingsScreen from './src/screens/settingsScreen';
import WorkScreen from './src/screens/workScreen';
import {FontAwesome, Ionicons} from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainSectionTab=(props)=>{
  return(
    <Tab.Navigator  tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: '#ccc',
    }}>
    <Tab.Screen name ="Home" component={HomeScreen} options={{
          tabBarIcon: ({color,size})=> (
            <FontAwesome name="home" color="black" size={24}/>
            )
        }}/>
    <Tab.Screen name="Categories" component={CategoriesScreen} options={{
          tabBarIcon: ({focused})=> (
            <Ionicons name="ios-apps" color="black" size={24}/>
            )
        }}/>
    <Tab.Screen name="Outlet" component={OutletScreen}  options={{
        tabBarIcon: ({focused})=> (
          <Ionicons name="logo-buffer" color="black" size={24}/>
          )
      }}/>
      <Tab.Screen name="Cart" component={CartScreen} options={{
        tabBarIcon: ({focused})=> (
          <Ionicons name="ios-cart" color="black" size={24}/>
          )
      }}/>

<Tab.Screen name="My Kikuu" component={MykikuuScreen} options={{
        tabBarIcon: ({focused})=> (
          <Ionicons name="ios-person" color="black" size={24}/>
          )
      }}/> 
        
    </Tab.Navigator>
  );
}


export default function App() {
  return (
  // <HomeScreen/>
  //  <MessageScreen/>
  // <SettingsScreen/>
  // <WorkScreen/>
  <NavigationContainer>
    <Stack.Navigator >
      <Stack.Screen name="Main" component={MainSectionTab} options={{headerShown:false}}/>
      <Stack.Screen name="Categories" component={CategoriesScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Clothing" component={ClothingScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Shoe" component={ShoeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Bag" component={BagScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
