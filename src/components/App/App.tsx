import React, { FC } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom'
import { HandlePage } from '../pages/HandlePage'


const App: FC = () => {
    return (
        <div className="">
            <Router>
                <Switch>
                    <Route>
                        <HandlePage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App