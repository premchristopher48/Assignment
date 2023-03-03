import React,{useState} from 'react';
import Child from './Child';
import Child1 from './Child1';

function App(){
  const[name,setName]=useState("Kumar")
  const[text,setText]=useState("hello")

  function changeName(name){
    setName(name);
  }

  function changeText(text){
    setText(text)
  }
  return(
<div>
  <h4>My Name is {name}</h4>
  <h4>My text is {text}</h4>
  <Child changeName={changeName}/>
  <Child1 changeText={changeText}/>
</div>
  );
}

export default App;