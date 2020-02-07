import React, { Component } from "react";
import WordsToPractice from "../../components/Dashboard/WordsToPractice";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";
import config from "../../config";
import TokenService from "../../services/token-service";

class DashboardRoute extends Component {
  state = {
    words: [],
    totalScore: null,
    language: "",
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

    return (
      <section>
        <section id="dashboard-container">
          <h2 id="welcome-message">
            {this.context.user.name} is learning {this.state.language}!
            <p id="total-score-dashboard">
              Total correct answers: {this.state.totalScore}
            </p>
          </h2>
          <Link to="/learn" id="button-lets-learn" type="submit">
            <div id="learn-button-text">Start practicing</div>
          </Link>
          <h3 id="words-header-dashboard">Words to practice</h3>
          <WordsToPractice words={words} id={key} />
          <section className="stats"></section>
        </section>
      </section>
    );
  }
}

export default DashboardRoute;
