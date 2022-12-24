export const getRestaurants = ({ id, query }) => {
  if (id) {
    return { id, name: 'Restaurants' }
  } else {
    return [{ id, name: 'Restaurants', query: query }]
  }
}

export const setRestaurant = (req) => {
  const { body } = req

  return { myBody: body }
}
