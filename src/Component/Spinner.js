import React from 'react'
import Loading from './Loading.gif'

const Spinner = () => {

  return (
    <div className=" d-flex justify-content-center align-items-center" style={{ width: "90vw", height: "90vh" }}>
      <img src={Loading} alt="Loading" style={{ width: "10rem", height: "10rem" }} />
    </div>
  )

}

export default Spinner