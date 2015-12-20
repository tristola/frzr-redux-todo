import 'todomvc-app-css/index.css';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import Root from './containers/Root';

import {el, translate, Animation, View, ViewList} from 'frzr';
const store = configureStore();

import {Li} from './frzr/todoitem';


render(
  <Root store={store} />,
  document.getElementById('root')
);

const body = new View({
  el: document.body
});

const ul = new View({
  el: el('ul')
});
/*
const Li = View.extend({
  init () {
    this.el = el('li');
  },
  update (i) {
    this.setText(`Item ${i.text}`);
  }
})
**/
const li = new ViewList({
  View: Li
});


let unsubscribe = store.subscribe(() => {
  let data = [];
  let todos = store.getState().todos;
  for (var i in todos) {
    data.push(todos[i]);
  }
  li.setData(data);
}
);

ul.addChild(li);
body.addChild(ul);
