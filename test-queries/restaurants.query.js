
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const restaurant = await prisma.restaurant.findMany({});
    
await prisma.$disconnect();

console.log(restaurant);
console.log(JSON.stringify(restaurant, null, 4));
