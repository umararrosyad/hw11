const {Todo} = require('../models')

class TodoController {
    static async getAll(req,res,next){
        try{
            const todo = await Todo.findAll({
                where : {status : "active"}
            })
            if(!todo){
                throw {name : "nullResponse"}
            }
            res.status('200').json(todo)
        }catch(error){
            next(error)
        }
    }

    static async getOne(req, res, next){
        try{
           
            const {id} = req.params    
            const todo = await Todo.findByPk(id)
            if(!todo){
                throw {name : "nullResponse"}
            }
            res.status(200).json(todo)
        }catch(error){
            next(error)
        }
    }

    static async create (req, res , next){
        try{
            const {title, description} = req.body
            if(!title || !description){
                throw {name : "nullRequest"}
            }
            const todo = await Todo.create({
                title, description, status : "active"
            })
            res.status('201').json(todo)
        }catch(error){
            next(error)
        }
    }

    static async delete(req, res ,next){
        try{
            const {id} = req.params
            const todo = await Todo.findByPk(id)
            if(!todo || todo.status == "inactive"){
                throw {name : "nullDelete"}
            }
            await todo.update({
                status : "inactive"
            })
            res.status(200).json({message : "Delete Success"})
        }catch(error){
            next(error)
        }
    }
}

module.exports = TodoController
