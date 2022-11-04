import React,{useState} from 'react'
import ComparisonCard from './ComparisonCard';
import './ComparisonCard.css'

function Comparison() {
    const [comparisonsList, setcomparisonsList] = useState([]);
    const AddAlgo =() => {
     
        setcomparisonsList(comparisonsList.concat(<ComparisonCard />));
        
        
    }
    console.log(comparisonsList.length);
  return (
    <div>
        <div onClick={AddAlgo} className='plusButton_div'>
            <span>+</span>
            <p> Add Algorithm</p>
        </div>
        <div className='list'>
           {comparisonsList.map((Element,index) => {
             return <div key={index}> 
             <ComparisonCard comparisonsList={comparisonsList} id={index} setcomparisonsList={setcomparisonsList} />
             </div>
           })}
        </div>
        
    </div>
  )
}

export default Comparison