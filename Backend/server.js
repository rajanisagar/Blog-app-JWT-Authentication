const express = require('express')
const app = express()


const blogs = [
    {
        username:'sagar',
        blog:'blog 1'
    },
    {
        username:'ags',
        blog:'blog 2'
    },

]


app.get('/blogs', (req, res)=>{
    res.json(blogs)
})


app.listen(5000)