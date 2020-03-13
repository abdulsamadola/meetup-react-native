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
import { URL } from "../../config/config";
import Color from "../../themes/colors";
class Movies extends Component {
  static navigationOptions = {
    title: "Afrolynk React Native Meet Up",
    headerStyle: {
      backgroundColor: Color.afrolynk,
      //elevation: 0,
      color: "white",
      justifyContent: "center",
      alignItems: "center"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      color: "white",
      alignSelf: "center"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(data => this.setState({ data: data["items"] }))
      .catch(e => console.log(e));
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={{
            paddingBottom: Dimensions.get("window").height * 0.05,
            flex: 0,
            justifyContent: "space-around",
            flexWrap: "wrap",
            flexDirection: "row"
          }}
          style={{ flex: 0 }}
          data={this.state.data}
          renderItem={({ item, index, separators }) => (
            <MovieList
              data={item}
              onPress={() =>
                this.props.navigation.navigate("MovieDetails", { data: item })
              }
            />
          )}
          keyExtractor={data => data.snippet.id}
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
