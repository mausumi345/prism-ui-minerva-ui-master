//
// Copyright (c) 2019 Nutanix Inc. All rights reserved.
//
import React from 'react';
import 'babel-polyfill';
import { render, unmountComponentAtNode } from 'react-dom';
import { injectApi } from 'prism-utils-common';
import App from './App.jsx';

// The reference to the DOM element where the app has to mount
let el = null;

/**
 * Main entry point for react components.
 * @param {object} props - {
 *   el : DOM element where the app have to be loaded.
 *   componentProps: Any properties that would be pass along to the
 *     Search react component.
 *   ReactModuleDependencies: See ReactModuleDependecies.js
 * }
 * @returns {object} - {render: (function()), destroy: (function())}
 */
export function init(props) {
  if (!props.el) {
    throw new Error('props.el is required.');
  }
  el = props.el;
  const promise = injectAphroditeAPI(props.api._require);
  return {
    render: (cProps) => {
      promise.then(() => {
        // eslint-disable-next-line react/jsx-filename-extension
        render(<App { ...cProps } />, el);
      });
    },
    destroy: () => {
      unmountComponentAtNode(el);
    }
  };
}

/**
 * Function to clean up/destroy the component once we are done with it.
 */
export function destroy() {
  unmountComponentAtNode(el);
}

/**
 * Make aphrodite apis available to react modules.
 * @param {function} _require - the aprodite require js function.
 * @return {promise} - promise object
 */
function injectAphroditeAPI(_require) {
  const promise = new Promise((resolve) => {
    _require(
      [
        'managers/ClusterManager'
      ],
      function(
        ClusterManager
      ) {
        const modules = {
          Managers: {
            ClusterManager
          }
        };

        injectApi(modules);
        resolve();
      }
    );
  });

  return promise;
}
