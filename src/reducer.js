export const initialState = {
    term:[]
}

export  const actionTypes = {
    set_Search_Term: "set_Search_Term"
}

const reducer= (state , action) => {
    switch(action.type){
        case "set_Search_Term" :
            return{
                ...state,
                term:action.term
            };

            default :
            return state
    }
}

export default reducer;