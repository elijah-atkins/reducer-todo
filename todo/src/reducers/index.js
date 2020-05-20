import React, { useReducer } from 'react';

export const TOGGLE_EDITING = "TOGGLE_EDITNG";
export const END_ITEM_UPDATE = "END_ITEM_UPDATE";
export const TOGGLE_DONE = "TOGGLE_DONE";


const initialState = {
    //get from local storage
    editing: false,
    done: false,
    item: ""


}

function reducer(state, action){
    switch(action.type){
        case TOGGLE_EDITING:
            return {
                ...state,
                editing: !state.editing
            }
        case TOGGLE_DONE:
            return {
                ...state,
                done: !state.done
            }
        case END_ITEM_UPDATE:
            return {
                ...state,
                item: action.payload ? action.payload : state.item,
                editing: false
            }
        default:
            return state;
        
    }
}