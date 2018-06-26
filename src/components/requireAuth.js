import React from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComponsedComponent extends ChildComponent {
    componentDidMount = () => this.handleNotLoggedIn();      
    // Everytime it get new props
    componentDidUpdate = () => this.handleNotLoggedIn();
  
    handleNotLoggedIn = () => {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }
    render = () => <ChildComponent {...this.props} />
  }

  const mapStateToProps = (state) => {
    return ({ auth: state.auth });
  }

  return connect(mapStateToProps)(ComponsedComponent);
}