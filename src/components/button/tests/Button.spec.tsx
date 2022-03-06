import * as React from 'react';
import { mount } from '@cypress/react';
import { Feed } from '../../../containers/feed';

it('renders the text', () => {
  mount(<Feed />);
  cy.visit('/feed');
  cy.get('a').contains('Login');
//   cy.get('button').contains('Login').click();
});