import React from 'react';
import { fireEvent, logRoles } from '@testing-library/dom';
import { render, screen } from '@testing-library/react';
import { App } from '../components/app';
import { Toggle, ToggleProps } from '../components/toggle/toggle';
import { Button, ButtonProps } from '../components/button/button';

describe('React Testing Library do:', () => {

    test('create snapshot of mounted component', () => {
        // render app
        render(<App />);

        // check the snapshot
        expect(screen).toMatchSnapshot;
    });

    test('find child by component', () => {
        // render App
        render(<App />);
        

        // find the component
        const childElement = screen.getByText(/click/i);

        // check if it exists
        expect(childElement).toBeInTheDocument();
    });

    test('find child by attribute', () => {
        // render App
        const {container} = render(<App/>);

        // find the component 
        const childElement = container.querySelector('[data-test-target="button-element"]'); // had to use query selector because getByTestId doesn't work since that function requires a data attribute named data-testid.

        // check if it exists
        expect(childElement).toBeInTheDocument();
    });

    test('find child by class name', () => {
        // render component
        const props: ToggleProps = {
            initialState: true,
            title: 'Dummy toggle title',
            onChange: () => null,
        };
        const {container} = render(<Toggle {...props} />);
        

        // find the component
        const input = container.querySelector('.toggle-style');

        // check if it exists
        expect(input).toBeInTheDocument();
    });

    test('get child attribute', () => {
        // render app
        render(<App/>);

        // find the component and it's attribute
        const input = screen.getByLabelText(/toggle/i);

        // simulate input
        fireEvent.click(input);

        // check the attribute value 
        expect(input).not.toBeChecked(); // since the initial state of the checkbox is checked, im asserting wether or not it is unchecked.
    });

    test('set component property', () => {
        // create a dummy button
        const props: ButtonProps = {
            title: "Dummy button title",
            isDisabled: false,
            onClick: jest.fn(),
        }

        // render and disable the button
        const {rerender} = render(<Button {...props}/>);
        rerender(<Button {...props} isDisabled={true} />)

        // find the button
        const button = screen.getByText(/dummy/i);

        // simulate a click
        fireEvent.click(button);
        
        // check if the button is clickable
        expect(props.onClick).toBeCalledTimes(0);
    });

    test('callback test', () => {
        // create a dummy button
        const props: ButtonProps = {
            title: "Dummy button props",
            isDisabled: false,
            onClick: jest.fn(),
        }

        // render the button
        render(<Button {...props}/>);

        // find the button
        const button = screen.getByText(/dummy/i);

        // simulate a click
        fireEvent.click(button);

        // check if the button is clicked
        expect(props.onClick).toBeCalledTimes(1);
    });
});
