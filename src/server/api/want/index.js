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
/** Get All Expense Want */
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

/** Update want Expense */
router.put("/:id", async (req, res, next) => {
  try {
    const { category, month } = req.body;
    const spent = +req.body.spent;
    const id = +req.params.id;
    const want = await prisma.need.update({
      where: { id },
      data: { category, month, spent },
    });
    res.json({ data: want });
  } catch (err) {
    next(err);
  }
});

/** Delete item in Want table */
router.delete("/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const need = await prisma.need.delete({
      where: { id },
    });
    res.json({ data: need });
  } catch (err) {
    next(err);
  }
});
