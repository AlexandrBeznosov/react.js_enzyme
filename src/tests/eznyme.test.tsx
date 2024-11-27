import { mount, shallow } from 'enzyme';
import React from 'react';
import { App } from '../components/app';
import { Button, ButtonProps } from '../components/button/button';
import { Toggle, ToggleProps } from '../components/toggle/toggle';

describe('Enzyme do:', () => {
    test('create snapshot of mounted component', () => {
        const instance = mount(<App />);

        expect(instance).toMatchSnapshot();
    });

    test('find child by component', () => {
        const instance = shallow(<App />);
        const button = instance.find(Button);

        expect(button).toHaveLength(1);
    });

    test('find child by attribute', () => {
        const app = mount(<App />);
        const button = app.find('[data-test-target="button-element"]');

        expect(button).toHaveLength(1);
    });

    test('find child by class name', () => {
        const props: ToggleProps = {
            initialState: true,
            title: 'Dummy toggle title',
            onChange: () => null,
        }
        const toggle = mount(<Toggle {...props} />);
        const input = toggle.find('.toggle-style');

        expect(input).toHaveLength(1);
    });

    test('get child attribute', () => {
        const app = mount(<App />);
        const input = app.find(Toggle).find('input');
        input.simulate('change');
        const isChecked = input.prop('checked');

        expect(isChecked).toBeTruthy();
    });

    test('set component property', () => {
        const props: ButtonProps = {
            title: 'Dummy button title',
            isDisabled: false,
            onClick: jest.fn(),
        }
        const button = shallow(<Button {...props} />);
        button.setProps({ ...props, isDisabled: true });
        button.simulate('click');

        expect(props.onClick).toBeCalledTimes(0);
    });

    test('callback test', () => {
        const props: ButtonProps = {
            title: 'Dummy button title',
            isDisabled: false,
            onClick: jest.fn(),
        }
        const button = shallow(<Button {...props} />);
        button.simulate('click')

        expect(props.onClick).toBeCalledTimes(1);
    });
});

