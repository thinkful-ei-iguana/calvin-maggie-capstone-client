import React, { Component } from "react";
import WordsToPractice from "../../components/Dashboard/WordsToPractice";
import UserContext from "../../contexts/UserContext";
// import Context from '../../contexts/Context';
import { Link } from "react-router-dom";
import config from "../../config";
import TokenService from "../../services/token-service";

class DashboardRoute extends Component {
  state = {
    words: [],
    totalScore: null,
    language: '',
    key: null
  };

  static contextType = UserContext;

  componentDidMount() {
    this.getWords();
  }

  getWords() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log("data is", data);
        this.setState({
          words: data.words,
          totalScore: data.language.total_score,
          language: data.language.name,
          key: data.words.id
        });
      });
  }

  render() {
    let words = this.state.words;
    let key = this.state.key;
    console.log("totalscore is", this.state.totalScore);
    console.log("words is", words);
    console.log("look at dashboard line 46+ for text fixing");

    return (
      <section>

        <section id="dashboard-container">
          <h2 id="welcome-message">
            {this.context.user.name} is learning {this.state.language}!
            <p id="total-score-dashboard">Total correct answers: {this.state.totalScore}</p>
          </h2>
          <Link to="/learn" id="button-lets-learn" type="submit">
            <div id="learn-button-text">Start practicing</div>
          </Link>
          <h4 id="words-header-dashboard">Words to practice</h4>
          <WordsToPractice words={words} id={key} />
          <section className="stats">
          </section>
        </section>

      </section>
    );
  }
}

export default DashboardRoute;
