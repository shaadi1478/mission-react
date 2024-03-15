import Friends from '../Friends';
import Posts from '../Posts';
import Users from '../Users';
import './App.css'
import Counter from './Counter';
import Team from './Team';

function App() {
  function handleClick(){
    alert('Button Clicked')
  }

  function handleClick2(){
    alert('This is react alert message..')
  }
  
  const handleClick3 = () =>{
    alert('Clicked button 3');
  }

  return (
    <>
      <h2>React core concepts 2</h2>

      <Friends></Friends>
      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Posts></Posts>
      <button onClick={handleClick}>Click Me</button>
      <button className='click' onClick={handleClick2}>Alart message</button>
      <button className='click' onClick={handleClick3}>Arrow Funcition</button>

    </>
  )
}

export default App
