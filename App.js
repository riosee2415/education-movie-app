import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import CommonBtn from "./components/CommonBtn";
import { movies } from "./api/movies";
import MovieContainer from "./components/MovieContainer";

class App extends React.Component {
  // state : 변경되면 화면을 재시작 한다.
  state = {
    viewPopular: null,
    viewNowPlaying: null,
    popularBtn: false,
    nowPlayingBtn: false,
    loading: false
  };

  // redux :: state를 모든 js가 사용할 수 있게 만들어주는 기능
  //       :: 사용하고 싶은 곳 에서만 전역변수가 된다.
  // context API :: state를 모든 js가 API처럼 사용할 수 있게 만드는 기능

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
      nowPlaying = nowPlaying.data.results;

      this.setState({
        viewPopular: popular,
        viewNowPlaying: nowPlaying,
        loading: true
      });
    }
  };

  // onPress       ===        onClick
  // onPressOut    ===        After click

  render() {
    const {
      viewPopular,
      viewNowPlaying,
      popularBtn,
      nowPlayingBtn,
      loading
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.btnArea}>
          <TouchableOpacity onPress={this._clickPopularBtn}>
            <Text>Popular</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this._clickNowPlayingBtn}>
            <Text>NowPlaying</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {popularBtn ? (
            loading ? (
              viewPopular.map(movie => (
                <MovieContainer
                  id={movie.id}
                  title={movie.title}
                  vote={movie.vote_average}
                  release={movie.release_date}
                  poster={movie.poster_path}
                />
              ))
            ) : (
              <Text>Loading ... </Text>
            )
          ) : null}

          {nowPlayingBtn ? (
            loading ? (
              viewNowPlaying.map(movie => (
                <MovieContainer
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  vote={movie.vote_average}
                  release={movie.release_date}
                  poster={movie.poster_path}
                />
              ))
            ) : (
              <Text>Loading ... </Text>
            )
          ) : null}
        </ScrollView>
      </View>
    );
  }

  _clickPopularBtn = () => {
    this.setState({
      popularBtn: true,
      nowPlayingBtn: false
    });
  };

  _clickNowPlayingBtn = () => {
    this.setState({
      nowPlayingBtn: true,
      popularBtn: false
    });
  };
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
