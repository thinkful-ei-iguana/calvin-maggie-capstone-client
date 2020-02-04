import React, { Component } from 'react';
import NextWord from '../../components/Learning/NextWord';
import Result from '../../components/Learning/Result';


class LearningRoute extends Component {


  render() {
    return (
      <section>
        <NextWord />
        {/* <Result /> */}
      </section>
    );
  }
}

export default LearningRoute
