import React from 'react'
import Loadable from 'react-loadable';
import Loading from './Loading';

const LoadableComponent = Loadable({
    loader: () => import('./App'),
    loading: Loading,
});

export default class LoadableApp extends React.Component {
    render() {
        return <LoadableComponent/>;
    }
}

