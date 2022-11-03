import React, { Component } from 'react'
const date =new Date();

export default class Footer extends Component {


  render() {
    return (
   
      <footer className=' footer  ' 
     >
      <div className='text-center fw-bold'>CopyRight {date.getFullYear() }</div>
      </footer>
    
    )
  }
}
