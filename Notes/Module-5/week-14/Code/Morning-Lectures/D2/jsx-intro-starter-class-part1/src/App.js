import Div from './Div';
import Composition from './Composition';
import List from './List';
import foo, { num1 as b1, num2 as b2 } from './export';

import './App.css';

function App() {
  //vanilla javascript
  const random = Math.floor(Math.random() * 100);
  const myName = { fName: 'JD', lName: 'Richards' };
  const fruits = ['apple', 'banana', 'orange', 'peach'];
  // whatever you want to comment
  return (
    <div className='container'>
      {/* whatever you want to write */}
      <h1>My Ugly React App</h1>
      <h2>Ugliest Website Ever</h2>
      <List fruits={fruits} />
      <Composition>
        <h2>Random Number: {random}</h2>
        <h2>
          Hi {myName.fName} {myName.lName}
        </h2>
        <h2>Sum: {foo(b1, b2)}</h2>
      </Composition>
      <Composition>
        <Div color='#FFC300' name={myName} />
      </Composition>

      {/* 
      <Div />
      <Div /> */}
    </div>
  );
}

export default App;
