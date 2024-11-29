// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

import { configure } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

// RTL setup 
import '@testing-library/jest-dom';
import { configure as configureRTL } from '@testing-library/react';

configure({ adapter: new EnzymeAdapter() });

configureRTL({ testIdAttribute: 'data-test-target' });