var React = require('react/addons');

console.log('Hello from jsx!')

var GroceryItemList = require('./components/GroceryItemList.jsx');

var initial = [{
  name: 'Waffles'
},{
  name: 'Ice Cream'
},{
  name: 'Beans',
  purchased: true
}, {
  name: 'Cheese'
}];

React.render(<GroceryItemList items={initial} />, app);
