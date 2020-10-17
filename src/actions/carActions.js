import { ADD_FEATURES, REMOVE_FEATURES } from "../reducers/carReducer"

export const addFeature = id => {
    return {
        type: ADD_FEATURES,
        payload: id,
    }
}

export const removeFeature = id => {
    return {
        type: REMOVE_FEATURES,
        payload: id,
    }
}