import React from 'react';
import {IndexRedirect ,Route, IndexRoute, browserHistory, Router} from 'react-router';
import AllMemosRoute from '../routes/AllMemosRoute';
import TodoRoute from '../routes/TodoRoute';
import DoingRoute from '../routes/DoingRoute';
import DoneRoute from '../routes/DoneRoute';
import App from '../container/App';


class RootRouters extends React.Component {
    render() {
        const {history} = this.props;
        return (
            <Router history={browserHistory}>
                <Route path="/one-day" component={App}>
                    {/*<IndexRedirect to="one-day"/>*/}
                    {/*<Route path="/"  component={App}>*/}
                        {/*＜IndexRedirect to="one-day" />*/}
                        <IndexRoute component={AllMemosRoute}/>
                        <Route path="/one-day/" component={AllMemosRoute}/>
                        <Route path="/one-day/todo" component={TodoRoute}/>
                        <Route path="/one-day/doing" component={DoingRoute}/>
                        <Route path="/one-day/done" component={DoneRoute}/>
                    </Route>
                {/*</Route>*/}
            </Router>
        )
    }
}

export default RootRouters