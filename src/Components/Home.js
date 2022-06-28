import React from 'react'
import "../Components/styles/Home.css"
import Button from 'react-bootstrap/esm/Button';

const Home = () => {
  return (
    <div className="container-body main">
        <div className='d-flex flex-column b justify-content-center'>
           
        <h1 className='title'>Apollo Institite <br /> Of Computer</h1>
        <Button type="button" className="btn btn-success">Take The First Step</Button>
        
        </div>
    </div>
  )
}

export default Home;