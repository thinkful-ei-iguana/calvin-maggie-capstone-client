import React, { Component } from 'react'
import WordsToPractice from "../../components/Dashboard/WordsToPractice";
import UserContext from "../../contexts/UserContext";
import Context from "../../contexts/Context";
import Button from '../../components/Button/Button';
import config from '../../config'
import TokenService from '../../services/token-service'

class DashboardRoute extends Component {
  state = {
    words: [],
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
        console.log('data is', data.words);
        this.setState({
          words: data.words
        })
      }
      );
  }

  render() {
    let words = this.state.words;
    console.log('words is', words)
    return (
      <section>
        {/* <UserContext.Consumer>
          {user => (
            <Context.Consumer>
              {context => ( */}
        <section id="dashboard-container">
          <h2>{this.context.user.name} is learning Maori!</h2>
          <Button
            type="submit">Let's learn!</Button>
          {/* <WordsToPractice user={user} context={context} /> */}
          <WordsToPractice words={words} />
          <section className="stats">

            <p>Total score: 46</p>
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
