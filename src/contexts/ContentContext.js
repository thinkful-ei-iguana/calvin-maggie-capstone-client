import React, { Component } from 'react';
// import config from '../config'
// import TokenService from '../services/token-service'

const ContentContext = React.createContext({
  // setActiveBand: () => { },
  ///////////
  words: [],
  language: {},
  error: null,
  currentWord: 'here',
  correctCount: 0,
  incorrectCount: 0,
  nextWord: 0,
  totalScore: 0,
  setCurrentWord: () => { },
  setCorrectCount: () => { },
  setIncorrectCount: () => { },
  setNextWord: () => { },
  setTotalScore: () => { }

});

export default ContentContext;

export class ContentContextProvider extends Component {
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
    error: null,
    currentWord: 'here',
    correctCount: 0,
    incorrectCount: 0,
    nextWord: 0,
    totalScore: 0
  };

  // setContext = () => {
  //   this.getLanguage().then((resData) => this.setState({
  //     error: null,
  //     language: resData.language,
  //     words: resData.words
  //   }));
  //   LanguageService.getHead().then((resData) => this.setState({
  //     head: resData
  //   }))
  // }

  // getLanguage = () => {
  //   return fetch(`${config.API_ENDPOINT}/language`, {
  //     method: 'GET',
  //     headers: {
  //       'content-type': 'application/json',
  //       'authorization': `Bearer ${TokenService.getAuthToken()}`
  //     }
  //   })
  //     .then(res => res.json())
  //     .then(response => response);
  // }

  setContextStats = (data) => {
    this.setState({
      currentword: data.currentWord,
      correctCount: data.correctCount,
      incorrectCount: data.incorrectCount,
      nextWord: data.nextWord,
      totalScore: data.totalScore
    })
  }

  setWords = (words) => {
    this.setState({
      words
    })
  }

  // setCurrentWord = (word) => {
  //   console.log('in context, setcurrent word is', word);
  //   this.setState({
  //     currentWord: word.original
  //   })
  // }

  // setCorrectCount = (word) => {
  //   console.log('in context, setcorrectcount word is', word);

  //   this.setState({
  //     correctCount: word.correct_count
  //   })
  // }

  // setIncorrectCount = (word) => {
  //   console.log('in context, setincorrect word is', word);

  //   this.setState({
  //     incorrectCount: word.incorrect_count
  //   })
  // }

  // setNextWord = (word) => {
  //   console.log('in context, setnextword word is', word);

  //   this.setState({
  //     nextWord: word.next
  //   })
  // }
  // setTotalScore = (word) => {
  //   console.log('in context, settotalscore word is', word);

  //   this.setState({
  //     word: word.total_score
  //   })
  // }

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
      error: this.state.error,
      currentWord: this.state.currentWord,
      correctCount: this.state.correctCount,
      incorrectCount: this.state.incorrectCount,
      nextWord: this.state.nextWord,
      totalScore: this.state.totalScore,
      setWords: this.setWords,
      setCurrentWord: this.setCurrentWord,
      setCorrectCount: this.setCorrectCount,
      setIncorrectCount: this.setIncorrectCount,
      setNextWord: this.setNextWord,
      setTotalScore: this.setTotalScore
    }
    return (
      <ContentContext.Provider value={value}>
        {this.props.children}
      </ContentContext.Provider>
    );
  }
}
