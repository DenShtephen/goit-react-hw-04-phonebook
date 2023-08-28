import PropTypes from 'prop-types';
import '../../index.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      {title && <h3 className="section-title">{title}</h3>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
