const router = require('express').Router()

const { json } = require('express')
const {checkAccountId} = require('./accounts-middleware')
const Accounts = require('./accounts-model')

router.get('/', async (req, res, next) => {
  // DO YOUR MAGIC
Accounts.getAll()
.then(accounts =>{
    res.status(200).json(accounts)
  })
.catch(next)
})

router.get('/:id',checkAccountId, async (req, res, next) => {
  try{
    const account = await Accounts.getById(req.params.id)
    res.status(200).json(account)

  }catch(err){
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  // DO YOUR MAGIC
  try{
    const data = await Accounts.create(req.body.name,req.body.budget)
    json(data)
  }catch(err){
    next(err)
  }

})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({message:'Something is no good'})
})

 

module.exports = router;
