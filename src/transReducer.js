const transactionReducer=((state,action)=>{
    switch(action.type){
        case 'Add_Transaction':{
            return[action.payload,...state]
        }
        case 'Del_Transaction':{
            if(action.count===1){
                action.count=2
                state.splice(action.key,1)
            }
            break;
        }
        default:{
            return(state);
        }
    }
})
export default transactionReducer;