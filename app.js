const express = require("express");
const { blogs } = require("./model/index");
const app = express();
require("./model/index");

// form bata aako data lai parse garney
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// node lai ejs use gar vaneko ho hae 
app.set("view engine", "ejs");

// folder access garna deko ejs file haru lai
//public vitra ko folder access garna payo aba 

app.use(express.static("./public"));

// HOME PAGE
app.get("/", async (req, res) => {
  const allBlogs = await blogs.findAll();

  res.render("home", { blogs: allBlogs });
});

//ADD BLOG PAGE

app.get("/addBlog", (req, res) => {
  res.render("addBlog");
});

//SINGLE BLOG PAGE
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

//DELETE BLOG
app.get("/delete/:id", async (req, res) => {
  // no UI
  const id = req.params.id;
  // delete garna destroy
  await blogs.destroy({ where: { id } });
  res.redirect("/");
});

//EDIT BLOG UI(PAGE)
app.get("/edit/:id", async (req, res) => {
  const id = req.params.id;
    // finding single blog to prefill in input
    const allBlogs = await blogs.findAll({
      where: {
        id,
      },
    });

    // allBlogs(single Blog) pass gareko editBlog.ejs file ma prefill ko lagi
  res.render("editBlog", { id: id,allBlogs:allBlogs });
});

//EDIT BLOG POST
app.post("/editBlog/:id", async (req, res) => {
  const id = req.params.id;

  // update
  // form bata(req.body) bata aako kura haru(title,description,subtitle) lai update gardey where id ko value chae tyo parameter bata aako id ko value xa 
  await blogs.update(req.body, {
    where: {
      id: id,
    },
  });
  // update vayisakeypaxi direct to singleBlog page of that specific id
  res.redirect("/single/" + id);
});

// ADD BLOG POST
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

  // kun page or path ma faldiney
  res.redirect("/");
});

// jaile pani end mahi hunchha yo code
app.listen(3000, () => {
  // server listen garna lai
  console.log("Server has started at port 3000");
});
