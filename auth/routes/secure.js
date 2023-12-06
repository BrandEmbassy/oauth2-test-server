const express = require('express')
const router = express.Router() // Instantiate a new router
const DebugControl = require('../utilities/debug.js')

router.get('/', (req,res) => {  // Successfully reached if can hit this :)
  DebugControl.log.flow('Secure');
  DebugControl.log.variable({name: 'res.locals.oauth.token', value: res.locals.oauth.token});

  res.json({
    success: true,
    user: res.locals.oauth.token.user,
  });
})

module.exports = router
