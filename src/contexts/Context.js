import React, { Component } from 'react';
// import config from '../config'
// import TokenService from '../services/token-service'

const Context = React.createContext({
  // setActiveBand: () => { },
  ///////////
  words: [],
  language: {},
  error: null

});

export default Context;

export class ContextProvider extends Component {
  state = {
    // bandsList: [],
    // error: null,
    // bandMembers: [],
    // activeUser: '',
    // activeBand: '',
    // usersBands: [],
    // bandSetlists: [],
    // bandRepertoire: [],
    // selectedSetlist: {},
    // loggedIn: null,
    /////////
    words: [],
    language: {},
    error: null
  };

  setWords = (words) => {
    this.setState({
      words
    })
  }

  // async componentDidMount() {
  //   let res = await this.getWordsAndLanguage();
  //   this.setState({
  //     words: res.words,
  //     language: res.language,
  //     error: null
  //   });
  //   console.log(this.state);
  // }

  // getWordsAndLanguage = () => {
  //   console.log('hit it')
  //   return fetch(`${config.API_ENDPOINT}/language`, {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json',
  //       'authorization': `Bearer ${TokenService.getAuthToken()}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(response => {
  //       console.log('res is', response);
  //       return response
  //     }
  //     );
  // }



  // setBandsList = (bandsList) => {
  //   this.setState({ bandsList })
  // }

  // setBandMembers = (bandMembers) => {
  //   this.setState({ bandMembers })
  // }

  // setActiveBand = (bandId) => {
  //   this.setState({ activeBand: bandId })
  // }


  render() {
    const value = {
      words: this.state.words,
      language: this.state.language,
      error: this.state.error

    }
    return (
      <Context.Provider value={value}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
