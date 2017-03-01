import React,{Component} from 'react'
import ReactDom from 'react-dom'
import { AppContainer } from 'react-hot-loader';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import App from './js/containers/App'
import todoApp from './js/reducers/reducers'


const render = (Component) => {
    let store = createStore(todoApp)
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Component/>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    );
};
render(App)


if (module.hot) {
    module.hot.accept('./js/containers/App', () => {
        render(App)
    });
}