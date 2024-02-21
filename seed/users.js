const db = require('../db')
const { User } = require('../models')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const userAccounts = [
        {
            username: 'adminTaggart',
            type: 'admin',
            email: 'andrew.taggart53@gmail.com',
            password: '9pqubvcf@#&(*!',
            name: 'Andrew Taggart'
        },
        {
            username: 'test1',
            type: 'user',
            email: 'taggart5369@gmail.com',
            password: 'fh89qpweqh@#&(*!',
            name: 'Test Account'
        }
    ]
    await User.insertMany(userAccounts)
    console.log('Created User accounts')
}
const run = async () => {
    await main()
    db.close()
}

run()
