import express from "express"
import path from "path"



const app = express();

app.use(express.static("build"))


app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});


app.listen(process.env.PORT || 5000, () => {
    console.log("Server listening on 5000");
  });


  