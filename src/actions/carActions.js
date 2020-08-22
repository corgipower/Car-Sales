export function addFeature() {
    console.log('action')
    return {type: "ADD_FEATURE"}
}

export function removeFeature() {
    return {type: "REMOVE_FEATURE"}
}