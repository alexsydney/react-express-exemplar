module.exports = function (app){
  var items = [{
    name: 'Waffles'
  },{
    name: 'Ice Cream'
  },{
    name: 'Beans',
    purchased: true
  }, {
    name: 'Cheese'
  }];

  app.route("/api/items")
  .get(function(req, res){
    res.send(items);
  })

}
