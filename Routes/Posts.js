const express = require("express");
const router = express.Router();
const db = require("../models");
const { tokenValidation } = require("../middlewares/AuthMiddleware");

router.get("/", async (req, res) => {
  try {
    const listaPosts = await db.sequelize.models.Posts.findAll();
    res.json(listaPosts);
  } catch (error) {
    res.json({ message: "Ocorreu um erro: " + error });
  }
});

router.post("/", async (req, res) => {
  try {
    const postCriado = await db.sequelize.models.Posts.create({
      tituloPost: req.body.tituloPost,
      textoPost: req.body.textoPost,
    });
    res.json(postCriado);
  } catch (error) {
    res.json({ message: "Ocorreu um erro: " + error });
  }
});

router.get("/especifico/:postId", async (req, res) => {
  try {
    const id = req.params.postId;
    const postEspecifico = await db.sequelize.models.Posts.findByPk(id);
    res.json(postEspecifico);
  } catch (error) {
    res.json({ message: "Ocorreu um erro: " + error });
  }
});

router.delete("/especifico/:postId", async (req, res) => {
  try {
    await db.sequelize.models.Posts.destroy({
      where: {
        id: req.params.postId,
      },
    });
    res.json("Post deletado");
  } catch (error) {
    res.json({ message: "Ocorreu um erro: " + error });
  }
});

router.put("/especifico/:postId", async (req, res) => {
  try {
    await db.sequelize.models.Posts.update(
      { tituloPost: req.body.tituloPost },
      {
        where: {
          id: req.params.postId,
        },
      }
    );
    res.json("Post alterado!");
  } catch (error) {
    res.json({ message: "Ocorreu um erro: " + error });
  }
});

module.exports = router;
