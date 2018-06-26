import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import App from 'components/App';
import Root from 'Root';

describe('Test App Component', () => {
  let wrapped;
  beforeEach(() => {
    wrapped = mount(<Root><MemoryRouter><App /></MemoryRouter></Root>);
  })
  it('shows links to navigate to', () => {
    expect(wrapped.find('a').length).toEqual(2);
  })
})