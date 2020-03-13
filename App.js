import React, { Component } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { createStackNavigator } from "react-navigation";
import AppNavigator from "./src/navigation/Navigation";

console.disableYellowBox = true;
console.reportErrorsAsExceptions = false;

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {}
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
