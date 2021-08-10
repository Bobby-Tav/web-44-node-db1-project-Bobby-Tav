const Accounts = require('./accounts-model')


exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  try{
      const account = await Accounts.getById(req.params.id)
      if(!account){
        res.status(404).json({message:'This is not an Id'})
      }else{
        req.account = account
        next()
      }
  }catch(err){
    next(err)
  }
}
