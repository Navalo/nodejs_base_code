const { celebrate, Joi, Segments } = require('celebrate')
const { constants } = require('../../utils')
const { getUserList } = require('../../lib/user')

const validation = celebrate({
  [Segments.QUERY]: Joi.object().keys({
    status: Joi.valid(constants.STATUS.ACTIVE, constants.STATUS.INACTIVE),
  })
})

async function list(req, res) {
  try {
    const users = await getUserList(req)
    return users
      ? {res, message: 'get users successfully', users}
      : {res, message: 'unable to get users'}
  } catch (error) {
    console.error(error)
     return {error}
  }
}

module.exports = [validation, list]