import PropTypes from 'prop-types';
import css from './titleSection.module.css';

const TitleSection = ({ title, children }) => (
  <section>
    <h1 className={css.title}>{title}</h1>
    {children}
  </section>
);

TitleSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
export default TitleSection;
