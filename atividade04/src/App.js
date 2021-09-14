import './App.css';
import MembersList from './components/MembersList';
import {Switch, Route} from 'react-router-dom';
import CurrentMember from './components/CurrentMember';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          
          <Switch>
                  <Route exact path='/'>
                      <MembersList/>            
                  </Route>
              
                  <Route exact path='/company/:id'>
                    <CurrentMember />
                  </Route>
               
                  <Route exact path='/customer/:id'>
                    <CurrentMember />
                  </Route>
                
              
          </Switch>
      </header>
    </div>
  );
}

export default App;
