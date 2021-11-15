const router = require("express").Router({ mergeParams: true })
const controller = require("./uses.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router
  .route("/")
  // for using list() function when making get request to the uses data
  .get(controller.list)
  .all(methodNotAllowed)

router
  .route("/:useId")
  // for using read() when making get request to a specific use
  .get(controller.read)
  // for using destroy when making a delete request to a specific use
  .delete(controller.delete)
  .all(methodNotAllowed)

module.exports = router