import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedbackPercentage,
}) => (
  <div className={css.statistic}>
    <p className={css.text}>Good: {good}</p>
    <p className={css.text}>Neutral: {neutral}</p>
    <p className={css.text}>Bad: {bad}</p>
    <p className={css.text}>Total: {total}</p>
    <p className={css.text}>Positive feedback: {positiveFeedbackPercentage}%</p>
  </div>
);

Notification.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackPercentage: PropTypes.number.isRequired,
};
export default Statistics;
