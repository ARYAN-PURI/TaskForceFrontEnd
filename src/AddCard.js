import React from "react";
import './AddCard.css'
export default function AddCard(){
    let [data,setData]=React.useState({question:'',answer:''});
    async function addcard(){
        if(data.question!=='' || data.answer!==''){
            let apidata={
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(data)
            }
            let response=await fetch('http://localhost:3000/addcard',apidata);
            response=await response.json();
            console.log(response);
            setData({question:'',answer:''});
        }
    }
    return(
        <div className="addcardbox">
            <h2>Enter the Information</h2>
            <input className='inputs' placeholder="Enter Question" type='text' value={data.question} onChange={(e)=>{setData({...data,question:e.target.value})}}/>
            <input className='inputs' placeholder="Enter Answer" type='text' value={data.answer} onChange={(e)=>{setData({...data,answer:e.target.value})}}/>
            <button onClick={addcard} className="btn">Add Card</button>
        </div>
    );
}