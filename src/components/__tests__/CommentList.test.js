import React from 'react';
import { mount } from 'enzyme';
import CommentList from 'components/CommentList';
import Root from 'Root';

describe('CommentList', () => {
  let wrapped;
  beforeEach(() => {
    const initialState = {
      comments: ['Comment 1', 'Comment 2']
    };
    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList /> 
      </Root>
      );
  })
  it('should create one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
  })
  it('show text for each comment', () => {
    const cheerio = wrapped.render();
    expect(cheerio.text()).toContain('Comment 1');
    expect(cheerio.text()).toContain('Comment 2');
  })
})