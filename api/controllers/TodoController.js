/**
 * TodoController
 *
 * @description :: Server-side logic for managing Todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTodos: function(req, res) {
		Todo.find().exec(function(err, todos) {
			console.log(22222, err, todos);
      if (err) throw err;
      res.json(todos);
    });
	},

	addTodo: function(req, res) {
		Todo.create(req.body).exec(function(err, todo) {
			console.log(2222222, err, todos);
			if (err) throw err;
			res.json(todo);
		});
	},

	updateTodo: function(req, res) {
		Todo.find(req.params.id)update(req.body).exec(function(err, todo) {
			console.log(2222222, err, todo);
			if (err) throw err;
			res.json(todo);
		})
	},

	removeTodo: function(req, res) {

	}
};
