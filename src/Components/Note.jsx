import React from 'react'

export default function Note(props) {
  function deleteoperation(){
    props.onDelete(props.id)

  }
  return (
    <>

{/* <div key={key} id={id}  className='container'>
   <div className='col-3'>
    <div className="card">
    <h5 className="card-title text-center mt-5">{title}</h5>
    <hr/>
  <div className="card-body text-center mb-5">
    {content}
  </div>
  </div>
</div>
</div>   */}
<div className='m-5 col-3   text-center mt-5 ' style={{"float":"left"}}>

<div className="card">
  <div className="card-header">
   {props.title}
  </div>
  <div className="card-body">
    {/* <h5 className="card-title">Special title treatment</h5> */}
    <p className="card-text">{props.content}</p>
    <a href="#" className="btn btn-primary  " onClick={deleteoperation}>Delete</a>
  </div>
</div>
</div>
    
   
</>
    
  )
}
