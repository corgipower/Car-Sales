export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  };
  
  export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_FEATURE":
            console.log('add', action)
            return {
              ...state,
              additionalPrice: state.additionalPrice + action.obj.price,
              car: {
                ...state.car,
                features: [
                  ...state.car.features,
                  action.obj
                ],
              },
              additionalFeatures: state.additionalFeatures.filter(feature => feature.id !== action.obj.id),
            }
        case "REMOVE_FEATURE":
          console.log('rem', action)
          console.log('rem', state)
            return {
              ...state,
              additionalPrice: state.additionalPrice - action.obj.price,
              car: {
                ...state.car,
                features: [
                  state.car.features.filter(feature => feature.id !== action.obj.id),
                ],
              },
              additionalFeatures: [
                ...state.additionalFeatures,
                action.obj,
              ],
            }
        default:
            return state;
    }
  };