import Card from "./components/Card";
import React from 'react';
import './Dashboard.css'

export default function Dashboard(){
    const [cardData,setCardData]=React.useState([]);
    let [current,setCurrent]=React.useState(0);
    let [moveNext,setMoveNext]=React.useState(false);
    async function getdata(){
        let data=await fetch('https://taskforcebackend.onrender.com/getcards');
        let response=await data.json();
        console.log(response);
        for (let i = 0; i < response.length / 2; i++) {
            let rand = Math.floor(Math.random() * response.length);
            let temp = response[rand];
            response[rand] = response[i];
            response[i] = temp;
        }
        setCardData(response);
    }
    React.useEffect(()=>{
        getdata();
    },[]);
    function nextcard(){
        setMoveNext(true);
        setTimeout(()=>{
            setMoveNext(false);
            setCurrent((current+1)%cardData.length);
        },1000);
    }
    return (
        <div>
            <Card cardData={cardData[current]?cardData[current]:{}} move={moveNext}/>
            <div className='nextcard'>
                <button onClick={nextcard} className="btn">Next Card</button>
            </div>
        </div>
    );
}
