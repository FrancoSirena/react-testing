import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

describe('Test CommentBox', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(<Root initialState={({auth: true})}><CommentBox /></Root>);
  })
  afterEach(() => {
    wrapped.unmount();
  })
  it('has a text area and a button', () => {
    expect(wrapped.find('button').length).toEqual(2);
    expect(wrapped.find('textarea').length).toEqual(1);
  })
  describe('Test form with area', () => {
    const newValue = 'new comment';
    beforeEach(() => {
      wrapped.find('textarea').simulate('change', { target : { value : newValue} } );
      wrapped.update();
    })
    it('can enter a text in textarea', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual(newValue);
    })
    it('submit the form and clears text', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();
      expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
  })
})