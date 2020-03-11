import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  FlatList,
  Dimensions
} from "react-native";
import MovieList from "../../components/MovieLists.compenent";
class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "ola" },
        { id: 2, name: "Moses" }
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{
            paddingBottom: Dimensions.get("window").height * 0.05
          }}
          style={{ flex: 0 }}
          data={this.state.data}
          renderItem={({ item, index, separators }) => (
            <MovieList data={item} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   // flex: 1,
  //   // backgroundColor: "red",
  //   // alignItems: "center",
  //   // justifyContent: "center",
  //   // flexDirection: "row",
  //   // flexWrap: "wrap"
  // },
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Movies;
