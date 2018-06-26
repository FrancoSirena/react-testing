import React from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends React.Component {
  handleClick = (isLoggedIn) => {
    this.props.changeAuth(isLoggedIn);
  }

  renderButton = () => {
    let message = this.props.auth ? 'Sign Out' : 'Sign In';
    let isLoggedIn = !this.props.auth;
    return (
      <button onClick={this.handleClick.bind(this, isLoggedIn)}>{ message }</button>
    )
  }

  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>
          {this.renderButton()}
        </li>
      </ul>
    )
  }
  render () {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" id="linkToBox" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);