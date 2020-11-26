import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { Main } from './pages/main'
import { MyCards } from './pages/my-cards'

export const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/mycards" component={MyCards} />
                </Switch>
            </Router>
        </div>
    )
}
