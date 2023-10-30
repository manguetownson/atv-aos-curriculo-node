module.exports = app => {
    const curriculum = require("../controllers/curriculum.controller.js");
  
    var router = require("express").Router();
  
    
    router.post("/", curriculum.create);
  
    // Retrieve all curriculum
    router.get("/", curriculum.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", curriculum.findAllWorking);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", curriculum.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", curriculum.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", curriculum.delete);
  
    // Create a new Tutorial
    router.delete("/", curriculum.deleteAll);
  
    app.use('/api/curriculum', router);
  };