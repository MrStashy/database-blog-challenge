const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {


    // Add your code here

    const createdUsers = await prisma.user.createMany({
        data: [{
            username: 'Johnson',
            email: 'silly@sausage.com'
        }, {
            username: 'Porky',
            email: 'bobby@fingers.com'
        }, {
            username: 'Manky',
            email: 'bananay@safeway.com'
        }]
    })


    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })