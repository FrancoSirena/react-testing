import React from 'react';
import { connect } from 'react-redux';
import requireAuth from 'components/requireAuth';
import * as actions from 'actions';

class CommentBox extends React.Component {
  // state = { comment: '' };

  // handleChange = event => {
  //   this.setState({ comment: event.target.value });
  // };

  handleSubmit = event => {
    event.preventDefault();
    if (!this.textArea.value) {
      return;
    }
    this.props.saveComment(this.textArea.value);
    this.textArea.value = '';
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <h4>Add a Comment</h4>
            <textarea ref={node => this.textArea = node}/>{ /*onChange={this.handleChange}  */}
            <div>
              <button> Submit comment </button>
            </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}> Fetch comments </button>
      </div>
    )
  }
};

export default requireAuth(connect(null, actions)(CommentBox));