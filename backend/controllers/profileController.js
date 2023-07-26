import Todo from '../models/Todo.js'

//this endpoint is to fetch the list of posts, a particularly user has created 
export const getMyTodos = async (req, res) => {
    console.log('AM I HERE?')
    try {
        const todos = await Todo.find({user: req.user})
        console.log(todos)
        res.status(200).json({
            msg: "Todos Found", 
            todos: todos
        })
    } catch(err) {
        console.log("here in error catch block")
        return res.status(500).json({
            error: err.message,
            message: "Internal Server Error"
        })
    }
}