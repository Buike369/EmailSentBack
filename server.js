const express = require('express')
const postRoutes = require('./routes/posts.js')
const cors = require('cors')


const app = express()
const port = process.env.PORT || 8080
app.use(express.json())
app.use(cors())

app.use("/api/post", postRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

})
