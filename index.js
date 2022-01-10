/*
 *
 */
const process = require('./src/listeners/processListener')
const application = require('./src/app/app')

/*
 * Listen to the process events.
 */
process.listen()

application.run()