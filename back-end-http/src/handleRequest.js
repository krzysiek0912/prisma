import { getRestaurants, setRestaurant } from './resources/restaurants.js'

const resolver = {
  'GET:': () => ({ hello: 'World!' }),
  'GET:restaurants': (req) => {
    return getRestaurants(req)
  },
  'POST:restaurants': (req) => {
    return setRestaurant(req)
  },
}

export async function handleRequest(req, res) {
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
