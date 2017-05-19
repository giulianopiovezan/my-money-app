const INITIAL_STATE = { selected: '', visible: {} }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SELECTED_TAB':
            return { ...state, selected: action.payload }
        case 'TABS_SHOWED':
            return { ...state, visible: action.payload }
        default:
            return state
    }
}