import * as React from 'react';
import { mount } from '@cypress/react';
import { Contact } from './index';

it('renders the text', () => {
  mount(<Contact />);
  cy.visit('/contact');
  cy.get('a').contains('Login');
//   cy.get('button').contains('Login').click();
});
