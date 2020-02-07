import React from 'react'

const ConteudoMblog = props =>{
    return(
     
        <div className="conteudo-m-blog">
            

            <div className="row">
    <div className="col s12 m7">
      <div className="card">
        <div className="card-image">
         
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action">
        <p>{JSON.stringify(props)}</p>
          <p>Conteudo do post</p>
          <p>Autor</p>
        </div>
      </div>
    </div>
  </div>
 </div>
 
    
 )
}
export default ConteudoMblog