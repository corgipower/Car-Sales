import React from 'react';
import {connect} from 'react-redux';
import {addFeature, removeFeature} from './actions/carActions'

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { initialState } from './reducers/carReducer';

const App = (props) => {
  const state = initialState

  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalPrice: state.additionalPrice,
    car: {
        features: state.car.features,
    },
    additionalFeatures: state.additionalFeatures,
  }
};

const mapDispatchToProps = {addFeature, removeFeature};

export default connect(mapStateToProps, mapDispatchToProps)(App);
