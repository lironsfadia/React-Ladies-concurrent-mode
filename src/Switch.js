import React, { Children } from 'react';

function Switch({ value, children }) {
  return Children.toArray(children)
    .filter(child => {
      if (typeof child === 'string') {
        throw "Switch component must work with Case component. Not strings "
      } else {
        return child.props.match === value
      }
    })
}

const Case = ({children }) => {
  return children;
};

Switch.Case = Case;

export default Switch;
