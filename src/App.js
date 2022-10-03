import React from 'react';
import Cards from './components/Cards'
const space = { width: '150px', height: '400px' };
const space1 = { width: '10px', height: '100px' };
const myImageStyle = { width: '150px', height: '150px',position: 'relative', top: '50%',left: '30%' };
const myImageStyle1 = { width: '70px', height: '70px',position: 'relative', top: '50%',left: '38%' };
function App() {

  return (
    <div className="App">
      <main>
      </main>
      <img style={myImageStyle} src="/img/cover.png" alt="" />
      <img style={space} src="/img/space.png" alt="" />
      <h1 style={{ color: 'White' }}>NMU Memory Game</h1> 
      <Cards />
      <img style={space1} src="/img/space.png" alt="" />
      <img style={myImageStyle1} src="/img/my_pic.png" alt="" />
      <h1 style={{ color: 'White' , fontSize :'14px' }}>Developed By:- Abdalrhman Ahmed</h1> 
    </div>
  );
}

export default App;
