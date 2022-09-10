// __tests__/About.test.js
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


afterEach(cleanup);

//In the first argument, a string declares what is being tested. 
//In the second argument, a callback function runs the test
describe('About component', () => {
    // First Test
    //renders is the test name
    it('renders', () => {
        render(<About />);
    });

    // Second Test
    it('matches snapshot DOM node structure', () => {
        // render About
        //we'll use the asFragment function, which returns a snapshot of the About component.
        //A snapshot is a serialized version of the DOM node structure, enabled by Jest.
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();

    });
})
