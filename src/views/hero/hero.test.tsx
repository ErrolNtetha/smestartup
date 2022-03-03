import React from 'react';
import { mount } from '@cypress/react';
import { Hero } from '.';

it('Renders the title and the button Get Started', () => {
    mount(<Hero />);
    cy.get('p').contains('Failing test!');
});