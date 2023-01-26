const models = require("../models/index");

require("dotenv").config();

const createPublication = async (req, res) => {
  try {
    const publication = req.body;
    const newPublication = await models.Publication.create({
      title: publication.name,
      nickname: publication.nickname,
      text: publication.text,
    });
    res.json({
      message: "Created Publication",
      newPublication,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
    });
  }
};

const updateMyPublication = async (req, res) => {
  try {
    const publication = req.body;
    await models.Publication.update(
      {
        title: publication.title,
        text: publication.text,
        fulljourney: publication.fulljourney,
      },
      {
        where: {
          id: publication.id,
        },
      }
    );
    res.json({
      message: "Publication updated!!",
    });
  } catch (error) {
    console.error(error);
  }
};

const deletePublication = async (req, res) => {
  try {
    const publicationId = req.body.id;
    const publication = await models.Publication.findOne({
      where: {
        id: publicationId,
      },
    });
    if (publication.id !== req.body.id) {
      //publication.user_id ! == req.auth.id
      res.json({
        message: "Cant delete publication. Not authorized!",
      });
    } else {
      await models.Publication.destroy({
        where: {
          id: publicationId,
        },
      });
      res.json({
        message: "Publication deleted",
      });
    }
  } catch (error) {
    console.error(error);
  }
};

// const deletePublication = async (req, res) => {

//     try {
//         const id = req.params.id;
//         const publication = await models.Publications.findOne({

//         })
//     }

//     category.destroy({
//       where: { id: id }
//     })
//       .then(num => {
//         if (num == 1) {
//           res.send({
//             message: "Category was deleted successfully!"
//           });
//         } else {
//           res.send({
//             message: `Cannot delete Category with id=${id}. Maybe Movie was not found!`
//           });
//         }
//       })
//       .catch(err => {
//         res.status(500).send({
//           message: "Could not delete Category with id=" + id
//         });
//       });
//   };

const getMyPublications = async (req, res) => {
  try {
    let publications = await models.Publication.findAll({
      where: {
        user_id: req.auth.id,
      },
    });
    res.json({
      message: "Here we have all your publications",
      publications,
    });
  } catch (error) {
    console.error(error);
  }
};

// const getAllPublications = async (req,res) => {
//     console.log (req, "esto es del endpoint")
//     try {
//         let publications = await models.Publications.findAll({
//             where: {
//                 token: req.auth.password
//             }
//         });

//         res.json({message: "All the publications list", publications});
//     }catch (error) {
//         console.error(error, "no hay publicaciones o ha ocurrido un error");
//     }
// }

const getAllPublications = async (req, res) => {
  try {
    const publications = await models.Publication.findAll();
    res.json({ message: "All publications list", publications });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  createPublication,
  updateMyPublication,
  deletePublication,
  getMyPublications,
  getAllPublications,
};
