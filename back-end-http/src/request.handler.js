import { appResolver } from './resolvers/app.resolver.js'
import { restaurantResolver } from './resolvers/restaurant.resolver.js'

const resolver = {
  ...appResolver,
  ...restaurantResolver,
}

export async function requestHandler(req, res) {
  const { url, method, resource } = req
  res.statusCode = 200

  const action = resolver[`${method}:${resource}`]

  if (action) {
    return action(req, res)
  } else {
    res.statusCode = 404
    return { message: `URL: ${url} for method ${method} not found` }
  }
}
