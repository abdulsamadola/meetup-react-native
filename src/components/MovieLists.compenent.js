import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from "react-native";
import Color from "../themes/colors";
class MovieLists extends Component {
  state = {};
  render() {
    const { data, onPress } = this.props;
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <ImageBackground
          style={{ flex: 1, width: undefined, height: undefined }}
          source={{ uri: data.snippet.thumbnails.high.url }}
          resizeMode="cover"
        ></ImageBackground>
        <Text numberOfLines={2} style={{ color: "white", margin: 3 }}>
          {data.snippet.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").width / 1.5,
    width: Dimensions.get("window").width / 2 - 10,
    backgroundColor: Color.afrolynk,
    margin: 4
  }
});
export default MovieLists;
