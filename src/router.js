import React, {Component} from 'react';
import Home from '../src/container/ButtomTab/Home';
import Search from '../src/container/ButtomTab/Search';
import UpdateProfile from '../src/container/ButtomTab/UpdateProfile';
import {
  createBottomTabNavigator,
  createAppContainer,
} from '@react-navigation/bottom-tabs';
import Login from './container/Auth/Login';
import Registration from './container/Auth/Registration';
import Intro from './container/Auth/Intro';
import {createStackNavigator} from '@react-navigation/stack';
import {scale} from './components/ScaleSheet';
import {Image} from 'react-native';
import asset from './asset';
import Profile from './container/ButtomTab/UpdateProfile/Profile';
import ForgetPass from './container/Auth/ForgetPass';
import Playmusic from './container/ButtomTab/Home/Playmusic';
import SplashScreen from './container/Auth/SpashScreen';
import {useSelector} from 'react-redux';
import ListLike from './container/Album/ListLike';
import SearchItem from './container/ButtomTab/Search/SearchItem';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        labelStyle: {
          fontSize: scale(13),
          justifyContent: 'center',
          fontWeight: 'bold',
          paddingBottom: scale(5),
        },
        activeTintColor: '#483d8b',
        style: {height: scale(60)},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => (
            <Image
              style={{width: scale(27), height: scale(27)}}
              resizeMode="contain"
              source={asset.HomeTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: () => (
            <Image
              style={{width: scale(25), height: scale(25)}}
              resizeMode="contain"
              source={asset.SearchTab}
            />
          ),
        }}
      />
      <Tab.Screen
        name="UpdateProfile"
        component={UpdateProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Image
              style={{width: scale(27), height: scale(27)}}
              resizeMode="contain"
              source={asset.Account_v}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const Stack = createStackNavigator();
const StackPublic = createStackNavigator();
function MyStack() {
  const loginStatus = useSelector((state) => state.loginStatus);
  return (
    <Stack.Navigator initialRouteName="Intro" headerMode="none">
      {!loginStatus && (
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
      )}
      {!loginStatus && <Stack.Screen name="Intro" component={Intro} />}
      {!loginStatus && <Stack.Screen name="Login" component={Login} />}
      {!loginStatus && (
        <Stack.Screen name="Registration" component={Registration} />
      )}
      {!loginStatus && (
        <Stack.Screen name="ForgetPass" component={ForgetPass} />
      )}
      {loginStatus && <Stack.Screen name="MyTabs" component={MyTabs} />}
      {loginStatus && <Stack.Screen name="Profile" component={Profile} />}
      {loginStatus && <Stack.Screen name="Playmusic" component={Playmusic} />}
      {loginStatus && <Stack.Screen name="ListLike" component={ListLike} />}
      {loginStatus && <Stack.Screen name="SearchItem" component={SearchItem} />}
      {/*
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Playmusic" component={Playmusic} />
      <Stack.Screen name="ListLike" component={ListLike} />
      <Stack.Screen name="SearchItem" component={SearchItem} /> */}
      {/* <Stack.Screem name="ListLike" component={ListLike} /> */}
    </Stack.Navigator>
  );
}
export default MyStack;
