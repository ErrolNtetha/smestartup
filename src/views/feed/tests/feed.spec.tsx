import * as React from 'react';
import { mount } from '@cypress/react';
import { FeedContainer } from '..';

it('renders the text', () => {
  mount(<FeedContainer />);
  cy.visit('/feed');
  cy.get('a').contains('Login');
//   cy.get('button').contains('Login').click();
});