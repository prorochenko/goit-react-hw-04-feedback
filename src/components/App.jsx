import { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import TitleSection from './TitleSection/TitleSection';
import css from './CommonStyle/Common.module.css';

export default function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  const onLeaveFeedback = ({ target: { name } }) => {
    options[name](prev => prev + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (good === 0) {
      return 0;
    } else return ((good / countTotalFeedback()) * 100).toFixed(2);
  };

  // const { onLeaveFeedback } = this;
  // const total = this.countTotalFeedback();
  // const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <TitleSection title="Please, leave feedback">
        <FeedbackOptions
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </TitleSection>
      <div>
        <TitleSection title="Statistics">
          {countTotalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedbackPercentage={countPositiveFeedbackPercentage()}
            />
          )}
        </TitleSection>
      </div>
    </div>
  );
}
