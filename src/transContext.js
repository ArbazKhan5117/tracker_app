import React,{createContext,useReducer} from 'react';
import transactionReducer from './transReducer';
const initialTransactions=[
    /*{desc:'Cash',amount:500},
    {desc:'Book',amount:-240},
    {desc:'Balance',amount:100}*/
] 
export const transactionContext=createContext(initialTransactions);
export const TransactionProvider=({children})=>{
    let [state,dispatch]=useReducer(transactionReducer,initialTransactions);
    function addTransaction(transObj){
        
        dispatch({
            
            type:'Add_Transaction',
            payload:{
                desc:transObj.desc,
                amount:transObj.amount
            }
        })
        
        
    }
    function delTransaction(delObj){
            dispatch({
                type:'Del_Transaction',
                key: delObj.key,
                count:delObj.count
            })
        }
    return(
        <transactionContext.Provider value={{
            transactions:state,
            addTransaction,
            delTransaction
        }}>
        {children}
        </transactionContext.Provider>
    );
}
