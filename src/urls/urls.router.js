const router = require("express").Router()
const controller = require("./urls.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")
const usesRouter = require("../uses/uses.router")

router
.use("/:urlId/uses", controller.urlExists, usesRouter)


router
  .route("/:urlId")
  // to make a get request that uses read()
  .get(controller.read)
  // to make a put request that uses update()
  .put(controller.update)
  // to return 405 status code for any otherwise unhandled method
  .all(methodNotAllowed)

router
  .route("/")
  // to make a get request that uses list()
  .get(controller.list)
  // to make a post request that uses create()
  .post(controller.create)
  // to return 405 status code for any otherwise unhandled method
  .all(methodNotAllowed)

module.exports = router