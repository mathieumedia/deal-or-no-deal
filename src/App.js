import {ThemeProvider} from '@mui/material/styles';
import {darkTheme} from './theme'
import './App.css';

import Game from './Game'
function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <div className="App">
                <Game />
            </div>
        </ThemeProvider>
    );
}

export default App;
