import React from "react";
import { createStackNavigator } from "react-navigation";
import Movies from "../screens/Movies/Movies";
import MovieDetailScreen from "../screens/Movies/MovieDetails";

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
