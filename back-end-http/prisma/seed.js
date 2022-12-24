import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const genPassword = () => bcrypt.hash('s4mpl3Pa55word', 10);

const prisma = new PrismaClient();

await prisma.user.deleteMany({});
await prisma.restaurant.deleteMany({});

await prisma.user.create({
    data: {
        id: 1,
        email: 'john@doe.com',
        password: await genPassword()
    }
});

await prisma.user.create({
    data: {
        id: 2,
        email: 'user@doe.com',
        password: await genPassword()
    }
});

await prisma.restaurant.create({
    data: {
        id: 1,
        name: 'Na Guod Niaka',
        address: 'address street 23, 90023 Hutomaki',
        type: 'SUSHI',
        products: {
            create: [
                { id: 1, name: 'Maki', price: 89.2, description: '24 rolls' },
                { id: 2, name: 'Maki2', price: 19.2, description: '32 rolls' },
                { id: 3, name: 'Maki3', price: 59.2, description: '12 rolls' }
            ]
        }
    }
});

await prisma.restaurant.create({
    data: {
        id: 2,
        name: 'Sooo Gast',
        address: 'address street 23, 90023 Hutomaki',
        type: 'FAST FOOD',
        products: {
            create: [
                { id: 4, name: 'Next Maki', price: 89.2, description: '24 rolls' },
                { id: 5, name: 'Next Maki2', price: 19.2, description: '32 rolls' },
                { id: 6, name: 'Next Maki3', price: 59.2, description: '12 rolls' }
            ]
        }
    }
});

await prisma.order.create({
    data: {
        userId: 1,
        restaurantId: 1,
        delivery: {
            create: {
                address: "My super street"
            }
        },
        products: {
            create: [
                {
                    price: 79.2,
                    product: {
                        connect: { id: 1 }
                    }
                }
            ]
        }
    }
});


await prisma.order.create({
    data: {
        userId: 2,
        restaurantId: 2,
        delivery: {
            create: {
                deliveryDate: new Date(),
                address: "My super street"
            }
        },
        products: {
            create: [
                {
                    price: 30,
                    product: {
                        connect: { id: 5 }
                    }
                }, 
                {
                    price: 12.5,
                    product: {
                        connect: { id: 3 }
                    }
                }
            ]
        }
    }
});