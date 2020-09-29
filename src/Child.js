import React,{useContext,useState} from 'react';
import {transactionContext} from './transContext';
function Child(){
    let {transactions,addTransaction,delTransaction}=useContext(transactionContext);
    let [newDesc,setDesc]=useState('');
    let [newAmount,setAmount]=useState(0);
   // let [count,setCount]=useState(0);
    const getIncome=()=>{
        let income=0;
        for(var i=0;i<transactions.length;i++){
            if(transactions[i].amount>0){
                income+=transactions[i].amount;
            }
        }
        return income;
    }
    const getExpense=()=>{
        let expense=0;
        for(var i=0;i<transactions.length;i++){
            if(transactions[i].amount<0){
                expense+=transactions[i].amount;
            }
        }
        return expense;
    }
    const handleAddition=(event)=>{
        event.preventDefault();
        addTransaction({
            desc:newDesc,
            amount:Number(newAmount)
        });
        setDesc('');
        setAmount(0);
    }
    const handleDeletion=(id)=>{
        console.log(transactions)
        console.log(id);
        delTransaction({
            key:id,
            count:1
        });
        //console.log(transactions);
       //return(transactions);
    }
    return(
        <div className='box'>
             <h1 className='head'>Expense Tracker</h1>
             <h3>Your Balance <br />{getIncome()+getExpense()}</h3>
             <div className='Bbox'>
                 <h3>INCOME <br/>{getIncome()}</h3>
                 <h3>EXPENSE <br/>{getExpense()}</h3>
             </div>
             <h3>History</h3><hr />
             <ul className='historyList'>
                 {transactions.map((transObj,index)=>{
                     //setCount(index);
                     return(<li key={index}><span className='li_desc'><span>{transObj.desc}</span><span>{transObj.amount}
                     </span></span><button onClick={()=>handleDeletion(index)}><span id="cross"><img src='./cross.png' alt='Del'></img></span></button></li>)
        
                 })}
             </ul>
             <h3>Add new transaction</h3><hr />
             <form className="formN" onSubmit={handleAddition}>
                 <label>
                     Enter Description:<br/>
                     <input type='text' value={newDesc} placeholder='Enter description' name='desc' onChange={(ev)=>setDesc(ev.target.value)} required />
                 </label>
                 <br/>
                 <label>
                     Enter Amount:<br/>
                     <input type='number' value={newAmount} placeholder='Enter Amount' name='amount' onChange={(ev)=>setAmount(ev.target.value)} required />
                 </label>
                 <br/>
                 <input type='submit' value='Add Transactions' />
             </form>
        </div>
    );
}
export default Child;