// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import FeedbackOptions from './Components/FeedbackOptions';
import Section from './Components/Section';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
    // const { good, neutral, bad } = this.state;
    // return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {

    const { good } = this.state;
    const total = this.countTotalFeedback();

    return (Math.round((good / total) * 100))

  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = Object.keys(this.state);

    return (
      <>
        <Section title={"Please leave feedback"}>
          <FeedbackOptions
            // options={['good', 'neutral', 'bad']}
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          /> :
            <Notification message={"No feedback given"} />}
        </Section>
      </>
    );
  }
}

export default App;
