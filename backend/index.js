const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

// initialization
app.get("/", (req, res) => {
    res.send("Welcome to At-Turath Academy!");
});

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASS}@at-turath.ct7ckrn.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        // collections
        const studentsCollection = client.db("schoolDB").collection("students");
        const teachersCollection = client.db("schoolDB").collection("teachers");

        // teachers APIs
        // post new teacher
        app.post("/teachers", async (req, res) => {
            const teacher = req.body;
            const status = await teachersCollection.insertOne(teacher);
            res.send(status);
        });

        // get all teachers data
        app.get("/teachers", async (req, res) => {
            const teachers = await teachersCollection.find().toArray();
            res.send(teachers);
        });


        // students APIs
        // post new student
        app.post("/students", async (req, res) => {
            const student = req.body;
            const status = await studentsCollection.insertOne(student);
            res.send(status);
        });

        // get all students data
        app.get("/students", async (req, res) => {
            const students = await studentsCollection.find().toArray();
            res.send(students);
        });

        // get single student data
        app.get("/students/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const status = await studentsCollection.findOne(query);
            res.send(status);
        });

        // update single student data
        app.patch("/students/:id", async (req, res) => {
            const id = req.params.id;
            const student = req.body;
            const query = { _id: new ObjectId(id) };
            const updatedStudent = {
                $set: {
                    name: student.name,
                    email: student.email,
                    level: student.level,
                    subject: student.subject,
                    address: student.address,
                    image: student.image
                }
            };
            const status = await studentsCollection.updateOne(query, updatedStudent);
            res.send(status);
        });

        // delete single student
        app.delete("/students/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const status = await studentsCollection.deleteOne(query);
            res.send(status);
        });

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);

// start the server
app.listen(port, () => {
    console.log(`Server started at ${port} port`);
});
