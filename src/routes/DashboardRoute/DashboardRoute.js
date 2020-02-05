import React, { Component } from 'react'
import WordsToPractice from '../../components/Dashboard/WordsToPractice';
import UserContext from '../../contexts/UserContext';
// import Context from '../../contexts/Context';
import { Link } from 'react-router-dom';
import config from '../../config'
import TokenService from '../../services/token-service'

class DashboardRoute extends Component {
  state = {
    words: [],
    totalScore: null
  }

  static contextType = UserContext;

  componentDidMount() {
    this.getWords();
  }

  getWords() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => res.json())
      .then(data => {
        console.log('data is', data);
        this.setState({
          words: data.words,
          totalScore: data.language.total_score
        })
      }
      );
  }

  render() {
    let words = this.state.words;
    console.log('totalscore is', this.state.totalScore)
    console.log('words is', words)
    return (
      <section>
        {/* <UserContext.Consumer>
          {user => (
            <Context.Consumer>
              {context => ( */}
        <section id="dashboard-container">
          <h2 id="welcome-message">{this.context.user.name} is learning Maori!</h2>
          <Link
            to='/learn'
            id="button-lets-learn"
            type="submit"><div id="learn-button-text">Let's learn!</div></Link>
          <h3 id="words-header-dashboard">Words that you're learning:</h3>
          {/* <WordsToPractice user={user} context={context} /> */}
          <WordsToPractice words={words} />
          <section className="stats">

            {this.state.words && <p id="total-score-dashboard">Total score: {this.state.totalScore} </p>}
          </section>
        </section>
        {/* )}
            </Context.Consumer>
          )}
        </UserContext.Consumer> */}
      </section>
    );
  }
}

export default DashboardRoute;
