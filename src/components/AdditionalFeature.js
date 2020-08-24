import React from 'react';
import { addFeature } from '../actions/carActions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  console.log(props)

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {
    addFeature,
}

export default connect(null, mapDispatchToProps)(AdditionalFeature);
// export default AdditionalFeature;
