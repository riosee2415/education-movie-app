import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";

class MovieContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View key={this.props.id} style={styles.box}>
        <TouchableOpacity>
          <Text style={styles.title}>{this.props.title}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.vote}>⭐️{this.props.vote}</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.release, styles.release2]}>
            {this.props.release}
          </Text>
        </TouchableOpacity>

        <Image
          style={{ width: 120, height: 180 }}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${this.props.poster}`
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    margin: 10,
    backgroundColor: "#dff9fb",
    borderRadius: 15,
    padding: 10
  },
  title: {
    fontWeight: "600"
  },
  vote: {
    color: "grey"
  },
  release: {
    color: "red"
  },
  release2: {
    marginTop: 5
  }
});

export default MovieContainer;
