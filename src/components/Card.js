import React from 'react'
import Spinner from './Spinner'
import Spinner3 from'./Spinner-3.gif'

export default function Card(props) {
  return (

    <>

  
<div className="card  my-4"  >

  <img src={props.url}  className="card-img-top" alt="https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2022/09/TR-India-Win-vs-AFG.png" />
  <div className="card-body">
    <p className="card-text">
    {props.firstname}
    </p>
  </div>
</div>

</>

  )
}

