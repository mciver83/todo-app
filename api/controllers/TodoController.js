/**
 * TodoController
 *
 * @description :: Server-side logic for managing Todoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getTodos: function(req, res) {
		Todo.find().exec(function(err, todos) {
      if (err) throw err;
      res.json(todos);
    });
	},

	addTodo: function(req, res) {
		Todo.create(req.body.todo).exec(function(err, todo) {
			if (err) throw err;
			res.json(todo);
		});
	},

	updateTodo: function(req, res) {
		var todo = req.body.todo;
		Todo.update({id: todo.id}, todo).exec(function(err, response) {
			if (err) throw err;
			res.json(response);
		})
	},

	removeTodo: function(req, res) {
		Todo.destroy({id: req.body.todo.id}).exec(function(err, response) {
			if (err) throw err;
			res.json(response)
		})
	}
};
