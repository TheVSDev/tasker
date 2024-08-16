// Imports
import knex from "knex"
import { NotFoundError as ObjectionNotFoundError } from "objection"

import { HTTP_ERRORS } from "@/api/constants"
import { NotFoundError, PublicError } from "@/api/errors"
import log from "@/api/middlewares/log"
import methodNotAllowed from "@/api/middlewares/methodNotAllowed"
import BaseModel from "@/db/models/BaseModel"

// Middleware
const mw = (handlers) => async (req, res) => {
  const middlewares = handlers[req.method]
  const sanitizedMiddlewares = [log, ...(middlewares || [methodNotAllowed])]
  let currentMiddlewareIndex = 0
  const db = knex(process.env.DB__CONNECTION)

  BaseModel.knex(db)

  const ctx = {
    db,
    req,
    res,
    next: async () => {
      const middleware = sanitizedMiddlewares[currentMiddlewareIndex]
      currentMiddlewareIndex += 1

      await middleware(ctx)
    },
  }

  try {
    await ctx.next()
  } catch (err) {
    const error =
      err instanceof ObjectionNotFoundError ? new NotFoundError() : err

    if (!(error instanceof PublicError)) {
      // eslint-disable-next-line no-console
      console.error(error)

      res
        .status(HTTP_ERRORS.INTERNAL_SERVER_ERROR)
        .send({ error: "Something went wrong." })

      return
    }

    res.status(error.httpCode).send({ error })
  } finally {
    await db.destroy()
  }
}

export default mw
