import * as React from 'react';
import { mount } from '@cypress/react';
import { Lists } from '../feed';

it('renders the text', () => {
  mount(<Lists />);
  cy.visit('/feed');
  cy.get('a').contains('Login');
//   cy.get('button').contains('Login').click();
});