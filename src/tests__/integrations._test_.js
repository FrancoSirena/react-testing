import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

describe('Integration test', () => {
  beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
      status: 200,
      response: [{name: 'lorem'}, {name: 'lorem1'}, {name: 'lorem2'}]
    })
  })
  
  afterEach(() => {
    moxios.uninstall();
  })
  
  it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
      <Root>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Root>
    );
    wrapped.find('.fetch-comments').simulate('click');
    moxios.wait(() => {
      wrapped.update();
      expect(wrapped.find('li').length).toEqual(3);
      done();
      wrapped.unmout();
    });
    
  });
})