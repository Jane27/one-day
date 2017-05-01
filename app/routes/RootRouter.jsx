import React from 'react';
import {IndexRedirect ,Route, IndexRoute, browserHistory, Router} from 'react-router';
import AllMemosRoute from '../routes/AllMemosRoute';
import TodoRoute from '../routes/TodoRoute';
import DoingRoute from '../routes/DoingRoute';
import DoneRoute from '../routes/DoneRoute';
import App from '../container/App';

const publicPath = '/one-day/';

export const routeCodes = {
  AllMemosRoute: publicPath,
  TodoRoute: `${ publicPath }todo`,
  DoingRoute: `${ publicPath }doing`,
  DoneRoute: `${ publicPath }done`
};

class RootRouters extends React.Component {
    render() {
        // const {history} = this.props;
        return (
            // <Router history={browserHistory}>
            //     <Route path="/one-day" component={App}>
            //         {/*<IndexRedirect to="one-day"/>*/}
            //         {/*<Route path="/"  component={App}>*/}
            //             {/*＜IndexRedirect to="one-day" />*/}
            //             <IndexRoute component={AllMemosRoute}/>
            //             <Route path="/one-day/" component={AllMemosRoute}/>
            //             <Route path="/one-day/todo" component={TodoRoute}/>
            //             <Route path="/one-day/doing" component={DoingRoute}/>
            //             <Route path="/one-day/done" component={DoneRoute}/>
            //         </Route>
            //     {/*</Route>*/}
            // </Router>

            // <Router history={browserHistory}>
            //     <Route path="/one-day" component={App}>
            //         <IndexRoute component={AllMemosRoute}/>
            //         <Route path="todo" component={TodoRoute}/>
            //         <Route path="doing" component={DoingRoute}/>
            //         <Route path="done" component={DoneRoute}/>
            //     </Route>
            // </Router>

            <Router history={ browserHistory }>
                <Route path={ publicPath } component={ App }>
                    <IndexRoute component={ AllMemosRoute }/>
                    <Route path={ routeCodes.AllMemosRoute } component={ AllMemosRoute }/>
                    <Route path={ routeCodes.TodoRoute } component={ TodoRoute }/>
                    <Route path={ routeCodes.DoingRoute } component={ DoingRoute }/>
                    <Route path={ routeCodes.DoneRoute } component={ DoneRoute }/>
                </Route>
            </Router>
        )
    }
}

export default RootRouters