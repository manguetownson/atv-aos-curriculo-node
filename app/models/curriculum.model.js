module.exports = (sequelize, Sequelize) => {
    const Curriculum = sequelize.define("curriculum", {
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.NUMBER
      },
      email: {
        type: Sequelize.STRING
      },
      adress:{
        type: Sequelize.STRING
      },
      phone:{
        type: Sequelize.NUMBER
      },
      working:{
        type: Sequelize.BOOLEAN
      }      

    });
  
    return Curriculum;
  };