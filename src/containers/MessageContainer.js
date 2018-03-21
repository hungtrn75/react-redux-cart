import React, { Component } from 'react';
import Message from './../components/Message'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class MessageContainer extends Component {
    render() {
        return (
            <Message message={this.props.message}/>
        );
    }
}
const mapStateToProps = state => {
    return ({
        message: state.message
    })
}

MessageContainer.propTypes = {
    message: PropTypes.string.isRequired
}
export default connect(mapStateToProps,null)(MessageContainer);