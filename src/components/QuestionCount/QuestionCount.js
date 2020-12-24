/**
 * Author : rajansingh
 * Created On : 12/12/20
 */
import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
    return (
        <h3>
            Question <span>{props.counter}</span> of <span>{props.total}</span>
        </h3>
    );
}

QuestionCount.propTypes = {
    counter: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};

export default QuestionCount;
