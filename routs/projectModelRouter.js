const express = require('express');

const ProjectModel = require("./../data/helpers/projectModel.js");

const router = express.Router();

//CRUD
//GET
router.get('/', (request, responce) => {
  ProjectModel.get()
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
router.post('/', (request, responce) => {
  const resourceObject = request.body;
  ProjectModel.insert(resourceObject)
    .then(newlyCreatedResource => {
      responce.status(200).json(newlyCreatedResource);
      //console.log(newlyCreatedResource);
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json(
        {
          error: "insert() could create this in the DB. A name string and description string are both requiered."
        }
      )
    })
});

//PUT
router.put('/:id', (request, responce) => {
  const id = request.params.id;
  const resourceObject = request.body;
  ProjectModel.update(id, resourceObject)
    .then(updatedResource => {
      if (updatedResource == null) {
        responce.status(500).json(
          {
            error: "update() can not find that ID"
          }
        )
      }
      else {
        responce.status(200).json(updatedResource);
        //console.log(updatedResource);
      }
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json(
        {
          error: "update() could edit this in the DB. Both an Object to submit and a valid ID are needed."
        }
      )
    })
});

//DEL
router.delete('/:id', (request, responce) => {
  const id = request.params.id;
  ProjectModel.remove(id)
    .then(numberOfRecordsDeleted => {
      if (numberOfRecordsDeleted == 0) {
        responce.status(500).json(
          {
            error: "This is not a valid ID to delete."
          }
        )
      }
      else {
        responce.status(200).json(numberOfRecordsDeleted);
        //console.log(numberOfRecordsDeleted);
      }

    })
    .catch( error => {
      console.log(error);
      responce.status(500).json(
        {
          error: "remove() could not remove this from the DB."
        }
      )
    })
});


//SOME BY ID
// SEE THE PUT BOTH TEST FOR VALID AND MAKES USE OF ID



//When adding an action, make sure the project_id provided belongs to an existing project. If you try to add an action with an id of 3 and there is no project with that id the database will return an error.

module.exports = router;
