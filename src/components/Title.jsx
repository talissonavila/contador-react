import PropTypes from "prop-types";

import "./Title.css";

const Title = ({ title, eventColor }) => {
    return (
        <h1 className="title" style={{ color: eventColor }}>
            {title}
        </h1>
    );
};

Title.propTypes = {
    title: PropTypes.string.isRequired,
    eventColor: PropTypes.string,
};

export default Title;