import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
class MovieLists extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={{ color: "white" }}>{this.props.data.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: "white" }}>We are cool!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 200,
    backgroundColor: "red"
  }
});
export default MovieLists;
