import React from 'react'
import './ComparisonCard.css'

function ComparisonCard(props) {
  
  const DeleteDiv =() => {
    let newList=[...props.comparisonsList];
    let id=props.id;
    newList.splice(id,1);
    props.setcomparisonsList(newList);
  }
  return (
    <div className='container'>
      <div className='close_div'>
       <button onClick={DeleteDiv}>&#10005;</button>
      </div>
      <div className='upper'>
        <div className='Version_div'>
       <label htmlFor="">Version</label>
        <select name="" id="">
          <option value="V1">V1</option>
          <option value="V2">V2</option>
          <option value="V3">V3</option>
        </select> 
        </div>
        <div className='timestamp_div'>
        <label htmlFor="">TimeStamp</label>
        <input type="text" placeholder='23/08/2022 1:54pm' />
        </div>
      </div>
        <label htmlFor="">Algorithm</label>
        <input type="text" placeholder='RFC' />
        <label htmlFor="">Cluster</label>
        <div className='cluster'>
        <select name="" id="" >
          <option value="Cluster Index - 1">Cluster Index - 1</option>
          <option value="Cluster Index - 2">Cluster Index - 2</option>
          <option value="Cluster Index - 3">Cluster Index - 3</option>
          <option value="Cluster Index - 4">Cluster Index - 4</option>
          <option value="Cluster Index - 5">Cluster Index - 5</option>
          <option value="Cluster Index - 5">Cluster Index - 5</option>
          <option value="Cluster Index - 5">Cluster Index - 5</option>
          <option value="Cluster Index - 5">Cluster Index - 5</option>
          <option value="Cluster Index - 5">Cluster Index - 5</option>
        </select> 
        </div>
      
    </div>
  )
}

export default ComparisonCard