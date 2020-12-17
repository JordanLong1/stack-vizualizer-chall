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

    newStack.unshift(number) // take the copy of our stacker array and add in number at the beginning.

    setStacker(newStack) // set the state of stacker to our copied array

    setNumber('') // clear the input field
   

  }

  const handlePop = () => {

    let popper = [...stacker] // create a copy of our stacker array again
popper.shift()  // remove the element from the beginning of the array. 

    setStacker(popper)

  }

  return (
    <div className='container'>
      <h1>Imma Stack</h1>
      <input type='number' onChange={handleChange} value={number} />
      <button onClick={handlePush}>push</button>
      <button onClick={handlePop}>pop</button>

      <div>
        {stacker.map(stack => <div className='stack-style' >{stack}</div>)}
      </div>

      
    
    </div>
  );
}

export default App;


