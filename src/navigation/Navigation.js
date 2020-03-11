import React, { Component } from "react";
import { createStackNavigator } from "react-navigation";
import Movies from "../screens/Movies/Movies";
import MovieDetailScreen from "../screens/Movies/MovieDetail";

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Movies },
    MovieDetails: { screen: MovieDetailScreen }
  },
  {
    initialRouteName: "Home"
  }
);

export default AppNavigator;
