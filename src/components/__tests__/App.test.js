import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

describe('Test App Component', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = shallow(<App />);
  })
  it('shows the a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
  })
  it('shows the a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
  })
})