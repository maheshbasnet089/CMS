const express = require("express");
const { blogs } = require("./model/index");
const app = express();
require("./model/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  const allBlogs = await blogs.findAll();

  res.render("home", { blogs: allBlogs });
});

app.get("/addBlog", (req, res) => {
  res.render("addBlog");
});

app.get("/single/:id", async (req, res) => {
  // parameter/url bata ko id
  const id = req.params.id;

  // yo id related matra data database bata tannu paryo

  // const allBlogs = await blogs.findByPk(id);

  const allBlogs = await blogs.findAll({
    where: {
      id,
    },
  });

  res.render("singleBlog", { allBlogs });
});

app.get("/delete/:id", async (req, res) => {
  // no UI
  const id = req.params.id;
  await blogs.destroy({ where: { id } });
  res.redirect("/");
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
