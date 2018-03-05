const Router = require('express').Router
const Event = require('./model')

const router = new Router()

router.get('/', function(req, res){
  res.send('Welcome to the events page');
});

router.get('/events', (req, res) => {
  Event.findAll({
    where: {
      startDate: {
        $gte: new Date()
      }},
    attributes: ['title', 'startDate', 'endDate']
  })
    .then(result => {
      res.json(result)
    })
    .catch(err => {
      res.status(500)
      res.json({message: 'Something went wrong'})
    })
})

router.get('/events/:id', (req, res) => {
  Event.findById(req.params.id)
    .then(result => {
      if (result) {
        res.json(result)
      } else {
        res.status(404)
        res.json({ message: 'Not Found' })
      }
    })
    .catch(err => {
      res.status(500)
      res.json({ message: 'There was an error' })
    })
})

router.post('/events', (req, res) => {
  const event = req.body;
  const Op = Sequelize.Op;

  Event.create(event, {

    startDate: {[Op.gt]: new Date()}


})
    .then(entity => {
      res.status(201)
      res.json(entity)
    })
    .catch(err => {
      res.status(422)
      res.json({ message: err.message })
    })
})

const updateOrPatch = (req, res) => {
  const eventId = Number(req.params.id)
  const updates = req.body

  Event.findById(req.params.id)
    .then(entity => {
      if (entity.userId !== req.user.id) {
        res.status(403).send({
          message: 'You\'re not allowed to edit this event!'
        })
      }
      else {
        return entity.update(updates)
      }
    })
    .then(final => {
      res.json(final)
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong`,
        error
      })
    })
}

router.put('/events/:id', updateOrPatch)
router.patch('/events/:id', updateOrPatch)

router.delete('/events/:id', (req, res) => {
  Product.findById(req.params.id)
    .then(entity => {
      if (entity.userId !== req.user.id) {
        res.status(403).send({
          message: 'You\'re not allowed to delete this event!'
        })
      }
      else {
        return entity.destroy()
      }
    })
    .then(_ => {
      res.send({
        message: 'The event was deleted succesfully'
      })
    })
    .catch(error => {
      res.status(500).send({
        message: `Something went wrong`,
        error
      })
    })
})





module.exports = router
