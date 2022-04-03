import React from "react";
import {BrowserRouter} from 'react-router-dom';
import MainContainer from './container/MainContainer';
import {Provider} from "react-redux";
import {configStore} from './redux/configStore';
import './App.css';

const store = configStore();

function App() {
	return (
		<div>
			<Provider store={store}>
				<BrowserRouter>
					<MainContainer />
				</BrowserRouter>
			</Provider>
		</div>
	)
}

export default App;
