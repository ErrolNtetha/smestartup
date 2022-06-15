import * as React from 'react';
import { mount } from '@cypress/react';
import { FeedContainer } from '..';

it('renders the posts in the feed', () => {
  mount(<FeedContainer />);
  cy.visit('/feed');
  cy.get('a').contains('Login');
//   cy.get('button').contains('Login').click();
});
