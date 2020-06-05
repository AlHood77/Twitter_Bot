// require config file
const config=require('./config')

// require twit module
const twit=require('twit')

// make instance of this twit module
const T=new twit(config)
