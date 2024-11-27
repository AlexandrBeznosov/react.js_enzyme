import React from 'react';

import { Button } from './button/button';
import { Toggle } from './toggle/toggle';

const App: React.FC = () => {
    return (<div className="App">
        <Button title='Click me!' onClick={message => window.alert(message)} isDisabled={false} />
        <Toggle title='Toggle me!' onChange={state => window.console.log(String(state))} initialState={true} />
    </div>);
}

export { App };
