const express = require('express')
const app = express()
const port = 5000

app.get('/hocjs', (req, res) => {
    return res.send('hocjs')
})

app.listen(port, () => console.log(`Listen to http://localhost:${port}`))