import model from './model.pg'

export default class UserCRUD {
    Model: model = new model() 

    get = async (req, res) => {
        try {
            console.log(req.params)
            if(req.params.id){
                const singleUser = await this.Model.getUsersById(req.params.id)
                res.status(200).json(singleUser)
            } else {
                const allUsers = await this.Model.getUsers()
                res.status(200).json(allUsers)
            }
            
        } catch (error) {
            res.status(500)   
        }
    }

    post = async (req, res) => {
        
    }

    put = async (req, res) => {
        
    }

    delete = async (req, res) => {
        
    }
}
