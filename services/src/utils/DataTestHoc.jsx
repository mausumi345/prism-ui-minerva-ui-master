//
// Copyright (c) 2018 Nutanix Inc. All rights reserved.
//
// Data Test HOC -- adds the silly data-test attribute by simply copying the
// id attribute of the component
//
import React from 'react';
import PropTypes from 'prop-types';

export default (WrappedComponent) => {
  class dtHOC extends React.Component {

    static propTypes = {
      id: PropTypes.string.isRequired
    };
    render() {
      return <WrappedComponent data-test={ this.props.id } { ...this.props } />;
    }

  }
  return dtHOC;
};
