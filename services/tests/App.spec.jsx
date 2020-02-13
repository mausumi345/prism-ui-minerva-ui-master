import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { mount } from 'enzyme';
import App from '../src/App';

describe('App', () => {
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store;
  const initStore = {
  	modals:{
  	visible: true,
  	options: {},
    type: ''
  	},
    groupsapi: {
      fsData: {}
    }
  }

  it('Mounts main App', () => {
  	store = mockStore(initStore);
    const cbp = mount(<Provider store={ store }>
      <App /></Provider>).instance();
    expect(cbp).toBeTruthy();
  });
});

// describe('App', () => {
//   it('Mounts main App', () => {	
//     expect(1).toBeTruthy();
//   });
// });