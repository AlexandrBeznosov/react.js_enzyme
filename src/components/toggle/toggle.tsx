import { useCallback, useState } from "react";

import './toggle.css';

export interface ToggleProps {
    title: string;
    initialState: boolean;
    onChange: (state: boolean) => void;
}

export const Toggle: React.FC<ToggleProps> = props => {
    const { onChange } = props;

    const [state, setState] = useState(props.initialState);

    const handleChange = useCallback(() => {
        setState(!state);
        onChange(!state);

    }, [onChange, state]);

    return (
        <label className="toggle-style" htmlFor="toggle-id">
            <input type="checkbox" checked={state} id="toggle-id" data-test-target="toggle-element" onChange={handleChange} />
            {props.title}
        </label>
    );
}