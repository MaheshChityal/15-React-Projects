import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people,setpeople] =useState(data)

  return <section className="container">
    <h3 >{people.length} Birthday Today</h3>
    <List people={people}/>
    <button onClick={()=>setpeople([])}>Clear All</button>
  </section>;
}

export default App;