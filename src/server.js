import express from "express"
import task from "./routes/route.js"
const app = express();

//middleware
app.use(express.json())

const port = 5000;

//create a route
app.get("/", (req, res) => {
    res.json({
        message: "welcome to Api",
        tasks: {
            name: "Emma",
            id: 1,
            complete: true
        }
    })
})

app.post("/", (req, res) => {
    console.log(req.body)

    res.json({
        message: "user has been created",
        user: req.body
    })
})

app.get("/api/tasks/:id", (req, res) => {
    console.log(req.params)

    res.json({
        message: "task Id recieved",
        id: req.params.id
    })
})

app.get("/api/search", (req, res) => {
    console.log(req.query)

    res.json({
        search: req.query
    })
})


app.use("/api/tasks", task)

app.listen(port, () => {
    console.log(`your server is running on port ${port}.. `)
})