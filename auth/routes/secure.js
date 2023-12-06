const express = require('express')
const router = express.Router() // Instantiate a new router
const DebugControl = require('../utilities/debug.js')

router.get('/', (req,res) => {  // Successfully reached if can hit this :)
  DebugControl.log.flow('Secure');
  DebugControl.log.variable({name: 'res.locals.oauth.token', value: res.locals.oauth.token});

  const body = {
    success: true,
    user: {
      id: String(Math.random() * 1000000000000000000),
      firstName: 'John',
      lastName: 'Doe'
    }
  };

  DebugControl.log.variable({name: 'user.id', value: body.user.id});

  res.json(body)
})

module.exports = router
