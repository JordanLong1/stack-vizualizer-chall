import React, {useState} from 'react'

function App() {


  const [stacker, setStacker] = useState([]); 
  const [number, setNumber] = useState('');

  const handleChange = (event) => {

    setNumber(event.target.value); 

  }

  const handlePush = () => {

    if (number === '') return; 

    let newStack = [...stacker] // create a copy of our stacker array

    newStack.push(number) // take the copy of our stacker array and add in number at the beginning.

    setStacker(newStack) // set the state of stacker to our copied array

    setNumber('') // clear the input field
   

  }

  const handlePop = () => {

    let popper = [...stacker] // create a copy of our stacker array again
popper.pop()  // remove the element from the beginning of the array. 

    setStacker(popper)

  }

  return (
    <div className='app'>
      <h1>Imma Stack</h1>
      <input type='number' onChange={handleChange} value={number} />

      <button onClick={handlePush}>push</button>
      <button onClick={handlePop}>pop</button>

      <div style={{display: 'flex', flexDirection: 'column-reverse', alignItems: 'center'}}>
        {stacker.map(stack => <div style={{border: '1px solid black'}}>{stack}</div>)}
      </div>

      
    
    </div>
  );
}

export default App;


