export const ModalReducer = (state,action) => {
    switch(action.type){
        case "MODAL_OPEN":
            return {...state,showModal:action.payload, video:action.payload }
        case "MODAL_CLOSE":
            return {...state,showModal: false, video:{}}
        default:
            return state;
    }
}