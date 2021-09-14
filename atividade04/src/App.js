import './App.css';
import { members } from './helper';
import MembersList from './components/MembersList';
import {Switch, Route} from 'react-router-dom'
import { useState } from 'react';
import CurrentMember from './components/CurrentMember';
function App() {
  const [showMembers, setShowMembers] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
          {showMembers && <MembersList showMembers={setShowMembers}></MembersList>}
          <Switch>
              {members.map((member)=>(
                member.type === 'pj' ?(
                  <Route exact path='/company/:id' key={member.id}>
                    <CurrentMember showMembers={setShowMembers}/>
                  </Route>
                ):
                (
                  <Route exact path='/costumer/:id' key={member.id}>
                    <CurrentMember showMembers={setShowMembers}/>
                  </Route>
                )
              ))}
          </Switch>
      </header>
    </div>
  );
}

export default App;
