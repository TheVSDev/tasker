// Imports
import axios from "axios"
import deepmerge from "deepmerge"
import config from "@/web/config.js"

const call =
  (method) =>
  (path, data = null, options = {}) => {
    const jwt = localStorage.getItem(config.session.localStorageKey)

    options.headers = deepmerge(
      options.headers,
      jwt ? { authorization: jwt } : {}
    )

    const opts = {
      baseURL: config.api.baseURL,
      ...options,
    }

    return axios[method](path, method === "get" ? opts : data, opts)
  }

  // CRUD
const api = {
  post: call("post"), // Create
  get: call("get"), // Read
  patch: call("patch"), // Update
  delete: call("delete"), // Delete
}

export default api
