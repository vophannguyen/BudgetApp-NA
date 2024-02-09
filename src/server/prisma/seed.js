const prisma = require("../prisma");

const need = [{ category: "House Paymet", spent: 1450, month: "1" }];

const want = [{ category: "Food", spent: 1500, month: "1" }];

const saving = [{ category: "401k", spent: 100, month: "1" }];
/** Seeds the database with a user and some tasks */
const seed = async () => {
  await prisma.user.upsert({
    where: {
      username: "foo",
    },
    update: {},
    create: {
      username: "foo",
      password: "bar",
      need: {
        create: need.map((need) => ({
          category: need.category,
          spent: need.spent,
          month: need.month,
        })),
      },
      want: {
        create: want.map((want) => ({
          category: want.category,
          spent: want.spent,
          month: want.month,
        })),
      },
      saving: {
        create: saving.map((saving) => ({
          category: saving.category,
          spent: saving.spent,
          month: saving.month,
        })),
      },
    },
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
