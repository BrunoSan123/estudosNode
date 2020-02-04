import React from 'react';
import './App.css';


const getUrl =(text) =>{
  if(!text) return null;
  const a = document.createElement('a');
  a.href =text;

  const {protocol, host, pathname,search,hash} =a;

  const url=`${protocol}//${host}${pathname}${search}${hash}`;
  const isSameHost =(host === window.location.host)
  if(isSameHost) return null;

  return url;
};


function App() {

  const onBlur = (e) =>{
    const url =getUrl(e.target.value);
    console.log(url)
  }
  return (
  <div>
  <h1>My Lord</h1>
  <input type="text" onBlur={onBlur}/>
  </div>
  );
}

export default App;
