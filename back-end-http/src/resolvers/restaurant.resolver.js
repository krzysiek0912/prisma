import { getRestaurants, setRestaurant } from '../resources/restaurants.js'

export const restaurantResolver = {
  'GET:restaurants': (req) => {
    return getRestaurants(req)
  },
  'POST:restaurants': (req, res) => {
    return setRestaurant(req, res)
  },
}
