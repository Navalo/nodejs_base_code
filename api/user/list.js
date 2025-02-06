const { celebrate, Joi, Segments } = require("celebrate");
const { constants } = require("../../utils");
const { getUserList } = require("../../lib/user");

const validation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    status: Joi.valid(constants.STATUS.ACTIVE, constants.STATUS.INACTIVE),
  }),
});

async function list(req, res) {
  try {
    const users = await getUserList(req);
    return users
      ? res.success(users, "Get users successfully")
      : res.error("No users found", 404);
  } catch (error) {
    console.error(error);
    return res.error("Internal Server Error", 500);
  }
}

module.exports = [validation, list];