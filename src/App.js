import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import MilkPool from './pages/milkpool'
const App = () => {
  return (
   <Router>
			<main>
        <Switch>
          <Route exact path="/"
            render={(props)=>
              (
                <MilkPool {...props}
                  
                />
              )
            }
          />
        </Switch>
			</main>
		</Router>
  )
}

export default App