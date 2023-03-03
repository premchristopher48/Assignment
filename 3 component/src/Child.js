import React from 'react';

function Child({changeName}){
  return(
<div>
  <button onClick={()=>changeName("prem")}>ChangeName</button>
</div>
  );
}

export default Child;