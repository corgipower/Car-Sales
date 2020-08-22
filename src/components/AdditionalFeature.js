import React from 'react';
import { addFeature } from '../actions/carActions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  console.log(props)

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={(e) => {console.log(e); addFeature(e)}}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = (state) => {
//   console.log('state', state)
//   return {
//     [state.car.features]: state.car.features,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addFeature: () => dispatch(addFeature()),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature);
export default AdditionalFeature;
