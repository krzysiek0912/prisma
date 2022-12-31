import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getRestaurants = async (req) => {
  const { id, query } = req
  if (id) {
    return prisma.restaurant.findFirstOrThrow({
      where: {
        id: Number(id),
      },
    })
  } else {
    const { page = '1', count = '50' } = query
    const pageNum = Number(page)
    const countNum = Number(count)
    const take = countNum <= 0 ? 1 : countNum
    const skip = (pageNum - 1) * take
    const restaurants = await prisma.restaurant.findMany({ skip, take })
    console.log(restaurants) // some logic...
    return restaurants
  }
}

export const setRestaurant = (req, res) => {
  const { body } = req
  res.statusCode = 201
  return prisma.restaurant.create({ data: body })
}
