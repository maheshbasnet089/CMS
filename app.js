const express = require("express");
const { blogs } = require("./model/index");
const app = express();
require("./model/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const allBlogs = await blogs.findAll();
  console.log(allBlogs);

  res.render("home",{blogs:allBlogs});
});

app.get("/addBlog", (req, res) => {
  res.render("addBlog");
});

app.post("/createBlog", async (req, res) => {
  // destructuring
  // const {title,subtitle,description} = req.body

  // blogs.create({
  //     title ,
  //     subtitle ,
  //     description

  // })

  // insert into blogs database

  await blogs.create({
    title: req.body.title,
    subtitle: req.body.subtitle,
    description: req.body.description,
  });

  res.redirect("/");
});

app.listen(3000, () => {
  console.log("Server has started at port 3000");
});
