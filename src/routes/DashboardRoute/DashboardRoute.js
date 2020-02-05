import React, { Component } from "react";
import WordsToPractice from "../../components/Dashboard/WordsToPractice";
import UserContext from "../../contexts/UserContext";
// import Context from '../../contexts/Context';
import { Link } from "react-router-dom";
import config from "../../config";
import TokenService from "../../services/token-service";

class DashboardRoute extends Component {
  state = {
    words: []
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
        console.log("data is", data.words);
        this.setState({
          words: data.words
        });
      });
  }

  render() {
    let words = this.state.words;
    console.log(this.state);
    console.log("words is", words);
    console.log("look at dashboard line 46+ for text fixing");
    return (
      <section>
        {/* <UserContext.Consumer>
          {user => (
            <Context.Consumer>
              {context => ( */}
        {/* add the following commented out lines into the line above as appropriate, this is only for testing purposes */}
        <section id="dashboard-container">
          <h2 id="welcome-message">
            {this.context.user.name} is learning Maori!
          </h2>
          <Link to="/learn" id="button-lets-learn" type="submit">
            <div id="learn-button-text">Start practicing</div>
          </Link>
          <h4 id="words-header-dashboard">Words that you're learning:</h4>
          {/* <WordsToPractice user={user} context={context} /> */}
          <WordsToPractice words={words} />

          <section className="stats">
            <p id="total-score-dashboard">'Total correct answers: 7'</p>
            {/* Total score: */}
          </section>
        </section>
        {/* )}
            </Context.Consumer>
          )}
        </UserContext.Consumer> */}{" "}
      </section>
    );
  }
}

export default DashboardRoute;
