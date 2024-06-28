const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seed() {
  // Add your code here

  const createdUser1 = await prisma.user.create({
    data: {
      username: "Johnson",
      email: "silly@sausage.com",
      profile: {
        create: {
          biography: "Born on sunday",
          profilePicUrl: "www.google.com",
        },
      },
    },
  });

  const createdUser2 = await prisma.user.create({
    data: {
      username: "Porky",
      email: "bobby@fingers.com",
      profile: {
        create: {
          biography: "It's a mystery",
          profilePicUrl: "www.yahoo.com",
        },
      },
    },
  });

  const createdUser3 = await prisma.user.create({
    data: {
      username: "Smelly",
      email: "Head@fingers.com",
      profile: {
        create: {
          biography: "Be real!",
          profilePicUrl: "www.altavista.com",
        },
      },
    },
  });

  // Don't edit any of the code below this line
  process.exit(0);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
