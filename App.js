import React from "react";
import { StyleSheet, Text, View } from "react-native";
import CommonBtn from "./components/CommonBtn";
import { movies } from "./api/movies";

class App extends React.Component {
  // state : 변경되면 화면을 재시작 한다.
  state = {
    viewPopular: null,
    loading: false
  };

  // render() 후 자동으로 실행되는 function
  componentDidMount = async () => {
    // async - await  :: await이 완료될 때 까지 기다려!
    let popular, nowPlaying;

    // 실행해!
    try {
      popular = await movies.getPopular();
      nowPlaying = await movies.getNowPlaying();
    } catch (error) {
      alert("영화 데이터를 가져오는데 실패!");
      console.log(error);
    } finally {
      // 정상구동 하든, 에러나든, 마지막에 나를 거쳐
      popular = popular.data.results;

      this.setState({
        viewPopular: popular,
        loading: true
      });
    }
  };

  render() {
    const { viewPopular, loading } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.btnArea}>
          <CommonBtn>Popular</CommonBtn>
          <CommonBtn>NowPlaying</CommonBtn>
        </View>

        {loading ? (
          viewPopular.map(movie => (
            <View key={movie.id}>
              <Text>{movie.title}</Text>
            </View>
          ))
        ) : (
          <Text>Loading ... </Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 50
  },
  btnArea: {
    flexDirection: "row",
    borderBottomColor: "#636e72",
    borderBottomWidth: 1,
    borderTopColor: "#636e72",
    borderTopWidth: 1,
    paddingBottom: 10,
    paddingTop: 10
  }
});

export default App;
