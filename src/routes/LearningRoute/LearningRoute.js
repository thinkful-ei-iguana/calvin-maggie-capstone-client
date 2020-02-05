import React, { Component } from "react";
import NextWord from "../../components/Learning/NextWord";

class LearningRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      head: {
        nextWord: "",
        wordCorrectCount: 0,
        wordIncorrectCount: 0,
        totalScore: 0
      }
    };
  }
  // componentDidMount() {
  //   LanguageApiService.getHead().then(res => {
  //     this.setState({ head: res });
  //   });
  // }
  render() {
    return (
      <section>
        {/* <Learning key={this.state.head.nextWord} head={this.state.head} /> */}
      </section>
      // <section>
      //    <NextWord />
      //    <Result />
      // </section>
    );
  }
}

export default LearningRoute;
