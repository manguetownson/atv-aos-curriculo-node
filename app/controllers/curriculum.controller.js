
const db = require("../models");
const Curriculum = db.curriculum;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.title) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
    }
};

const curriculum = {
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
    adress: req.body.adress,
    phone: req.body.phone,
    working: req.body.working ? req.body.working : false
  };


Curriculum.create(curriculum)
 .then(data => {
   res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the curriculum."
      });
    });

exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
  
    Curriculum.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving curriculums."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Curriculum.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Curriculums with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Curriculums with id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Curriculum.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Curriculum was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Curriculum with id=${id}. Maybe Curriculum was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Curriculum with id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Curriculum.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Curriculum was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Curriculum with id=${id}. Maybe Curriculum was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Curriculum with id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {
    Curriculum.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Curriculums were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Curriculums."
          });
        });
};

exports.findAllWorking = (req, res) => {
    Curriculum.findAll({ where: { working: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Curriculums."
      });
    });
};