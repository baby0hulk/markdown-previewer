import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Preview extends Component {
	render() {
		return (
			<div id="preview-container">
				<h2>Preview</h2>
		    <div id="preview" dangerouslySetInnerHTML={{ __html: this.props.html }}/>	
		  </div>
		)
	}
}

Preview.propTypes = {
  html: PropTypes.string
}

const mapStateToProps = state => ({
  html: state.data.html
});

export default connect(mapStateToProps)(Preview);