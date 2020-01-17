const express = require('express');

const ActionModel = require("./../data/helpers/actionModel.js");
const ProjectModel = require("./../data/helpers/projectModel.js");

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
/*When adding an action, make sure the project_id provided
belongs to an existing project.
If you try to add an action with an id of 3
and there is no project with that id the database will return an error.*/
router.post('/', (request, responce) => {
  const resourceObject = request.body;
  ProjectModel.get(request.body.project_id)
    .then(projectID => {
      if (projectID != null) {
        ActionModel.insert(resourceObject)
          .then(newlyCreatedResource => {
            responce.status(200).json(newlyCreatedResource);
            //console.log(newlyCreatedResource);
          })
          .catch( error => {
            console.log(error);
            responce.status(500).json(
              {
                error: "insert() could create this in the DB. A valid project ID, notes string, and description string are all requiered."
              }
            )
          })
      } else {
        console.log(error);
        responce.status(500).json(
          {
            error: "This is not a valid Project ID."
          }
        )
      }
      /*
      ActionModel.insert(resourceObject)
        .then(newlyCreatedResource => {
          responce.status(200).json(newlyCreatedResource);
          //console.log(newlyCreatedResource);
        })
        .catch( error => {
          console.log(error);
          responce.status(500).json(
            {
              error: "insert() could create this in the DB. A valid project ID, notes string, and description string are all requiered."
            }
          )
        })
      */
    })
    .catch( error => {
      console.log(error);
      responce.status(500).json(
        {
          error: "This is not a valid Project ID."
        }
      )
    })

});

//PUT

//DEL

//SOME BY ID






module.exports = router;
