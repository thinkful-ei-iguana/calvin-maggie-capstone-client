import React, { Component } from 'react'

class DashboardRoute extends Component {
  render() {
    return (
      <section>
        <section id="dashboard-container">
          <h2>Calvin is learning Maori!</h2>
          <button type="submit">Let's learn!</button>
          <ul>
            <h4>Words to practice:</h4>
            <li>aroha <br />correct attempts:9 incorrect attempts: 2</li>
            <li>Kia ora <br />correct attempts:8 incorrect attempts: 3</li>
            <li>mana <br />correct attempts:6 incorrect attempts: 5</li>
          </ul>
          <section class="stats">

            <p>Total score: 46</p>
          </section>
        </section>
      </section>
    );
  }
}

export default DashboardRoute
