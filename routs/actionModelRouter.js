const express = require('express');

const ActionModel = require("./../data/helpers/actionModel.js");

const router = express.Router();

//CRUD
//GET
router.get('/', (request, responce) => {
  ActionModel.get()
    .then(arrayOf => {
      responce.status(200).json(arrayOf);
      //console.log(arrayOf);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json(
        {
          error: "get() Could not GET and array from the DB."
        }
      )
    })
});

//POST

//PUT

//DEL

//SOME BY ID




//When adding an action, make sure the project_id provided belongs to an existing project. If you try to add an action with an id of 3 and there is no project with that id the database will return an error.

module.exports = router;