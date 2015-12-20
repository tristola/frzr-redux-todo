import {View, el} from 'frzr';

export const Li = View.extend({
  style: 'view',
  init () {
    this.el = el('div');
  },
  update (i) {
    this.setText(`Item ${i.text}`);
  }
})
