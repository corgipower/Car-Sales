import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { addFeature } from '../actions/carActions';
import { connect } from 'react-redux';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
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
//     addFeature: () => dispatch(addFeature),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeatures);

export default AdditionalFeatures;