import './AdminPanel.css';
import React from 'react';
export default function AdminPanel(){
    let [loggedin,setloggedin]=React.useState(false);
    let [user,setuser]=React.useState({name:'',password:''});
    let [incorrect,setIncorrect]=React.useState(false);
    let [cardData,setCardData]=React.useState([]);
    let [isdeleted,setisdeleted]=React.useState(false);
    function checkdetails(){
        if(user.name==="Aryan Puri" && user.password==="Aryan@482004"){
            setIncorrect(false);
            setloggedin(true);
        }
        else{
            setIncorrect(true);
        }
    }
    function deleterecord(id){
        let apidata={
            method:'DELETE',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id:id})
        }
        fetch('https://taskforcebackend.onrender.com/deletecard',apidata)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            setisdeleted(!isdeleted);
        })
    }
    async function getdata(){
        let data=await fetch('https://taskforcebackend.onrender.com/getcards');
        let response=await data.json();
        console.log(response);
        setCardData(response);
    }
    React.useEffect(()=>{
        getdata();
    },[isdeleted]);
    return(
        <div>
            {
            !loggedin?
                <div className='addcardbox'>
                    <h1 className='heading'>Enter UserName and Password to Enter into Admin Panel</h1>
                    <input className='inputs' placeholder="Enter UserName" type='text' value={user.name} onChange={(e)=>{setuser({...user,name:e.target.value})}}/>
                    <input className='inputs' placeholder="Enter Password" type='password' value={user.password} onChange={(e)=>{setuser({...user,password:e.target.value})}}/>
                    <button onClick={checkdetails} className="btn">Login</button>
                    {
                        incorrect?
                        <div className='error'>UserName or Password You Have Entered is Incorrect</div>
                        :
                        null
                    }
                </div>
            :
                <div>
                    <h1 className='heading'>The Data in Database</h1>
                    <div className='recordWrapper'>
                        {
                            cardData.length!==0?
                            cardData.map((val)=>(
                                <div key={val.id} className='record'>
                                    <div className='recordtext'>{val.question}</div>
                                    <div className='recordtext'>{val.answer}</div>
                                    <button className='btn' onClick={()=>{deleterecord(val.id)}}>Delete</button>
                                </div>
                            ))
                            :null
                        }
                    </div>
                </div>
            }
        </div>
    );
}