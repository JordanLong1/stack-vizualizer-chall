import React from 'react'

class App extends React.Component() {

    constructor(props) {
        super(props)
        this.state = {stacker: [], number: ''}
    }

     handleChange = (event) => {

    this.setState({
        number: event.target.value
    })

  }

    handlePush = () => {

    if (this.state.number === '') return; 

    let newStack = [...this.state.stacker] // create a copy of our stacker array

    newStack.push(this.state.number) // take the copy of our stacker array and add in number at the beginning.

    this.setState({
        stacker: newStack, 
        number: ''
    })
   

  }

   handlePop = () => {

    let popper = [...this.state.stacker] // create a copy of our stacker array again
popper.pop()  // remove the element from the beginning of the array. 

    this.setState({
        stacker: popper
    })

  }

  render() {

      return (
        <div className='app'>
          <h1>Imma Stack</h1>
          <input type='number' onChange={this.handleChange} value={this.state.number} />
    
          <button onClick={this.handlePush}>push</button>
          <button onClick={this.handlePop}>pop</button>
    
          <div style={{display: 'flex', flexDirection: 'column-reverse', alignItems: 'center'}}>
            {this.state.stacker.map(stack => <div style={{border: '1px solid black'}}>{stack}</div>)}
          </div>
    
          
        
        </div>
      );
  }
}

export default App;


