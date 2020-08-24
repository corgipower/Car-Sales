export function addFeature(id) {
    console.log('action')
    return {type: "ADD_FEATURE",
            obj: id,}
}

export function removeFeature(id) {
    return {type: "REMOVE_FEATURE",
            obj: id,}
}