import { useCallback } from "react";

import './button.css';

export interface ButtonProps {
    title: string;
    isDisabled: boolean;
    onClick: (message: string) => void;
}

export const Button: React.FC<ButtonProps> = props => {
    const { onClick } = props;

    const handleClick = useCallback(() => {
        if (!props.isDisabled) {
            onClick('Hello!');
        }
    }, [onClick, props.isDisabled]);

    return <div className="button-style" data-test-target="button-element" onClick={handleClick}>{props.title}</div>
}