import './Card.css';
import React from 'react';
export default function Card(props){
    let [flipState,setFlipState]=React.useState('question');
    let [animate,setanimate]=React.useState(false);
    let [moveNext,setMoveNext]=React.useState(false);
    React.useEffect(()=>{
        setFlipState('question');
    },[props.cardData]);
    React.useEffect(()=>{
        setMoveNext(props.move);
    },[props.move]);
    function flipcard(){
        setanimate(!animate);
        setTimeout(()=>{
            if(flipState==='question'){
                setFlipState('answer');
            }
            else{
                setFlipState('question');
            }
        },950);
        
    }
    return (
        <div className={`cardBody  ${ animate ?'animation':''} ${moveNext?'moveNext':''}`} >
            {
                flipState==='question'?
                <div>
                    <div className="cardtext">Question</div>
                    <div className="cardtext">{props.cardData.question} ?</div>
                </div>
                :
                <div>
                    <div className="cardtext">Answer</div>
                    <div className="cardtext">{props.cardData.answer}</div>
                </div>
            }
            
            <button className='btn' onClick={flipcard}>Flip Card</button>
        </div>
    );
}