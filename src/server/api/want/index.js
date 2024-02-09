const { ServerError } = require("../../errors");
const prisma = require("../../prisma");

const router = require("express").Router();
module.exports = router;
/** User must be logged in to access tasks. */
router.use((req, res, next) => {
  if (!res.locals.user) {
    return next(new ServerError(401, "You must be logged in."));
  }
  next();
});
/** Get All Expense Need */
router.get("/", async (req, res, next) => {
  try {
    const want = await prisma.want.findMany({
      where: { userId: res.locals.user.id },
    });
    res.json({ data: want });
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const { category, month } = req.body;
    const spent = +req.body.spent;
    const want = await prisma.want.create({
      data: {
        category,
        spent,
        month,
        userId: res.locals.user.id,
      },
    });
    res.json(want);
  } catch (err) {
    next(err);
  }
});
