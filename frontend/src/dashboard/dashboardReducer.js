const INITIAL_STATE = { summary: {credit: 0, debit: 0}}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'LOAD_SUMMARY':
            return { ...state, summary: action.payload.data}
        default: 
            return state
    }
}