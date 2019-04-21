const detailReducer=(state=null,action)=>{
    
    
    switch(action.type){
        case "SELECTED":
        return action.payload;
       
        default:
        
        return state;
        
    }
    
    
}
export default detailReducer;