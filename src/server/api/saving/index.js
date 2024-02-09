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
    const saving = await prisma.saving.findMany({
      where: { userId: res.locals.user.id },
    });
    res.json({ data: saving });
  } catch (err) {
    next(err);
  }
});
router.post("/", async (req, res, next) => {
  try {
    const { category, month } = req.body;
    const spent = +req.body.spent;
    const saving = await prisma.saving.create({
      data: {
        category,
        spent,
        month,
        userId: res.locals.user.id,
      },
    });
    res.json(saving);
  } catch (err) {
    next(err);
  }
});
