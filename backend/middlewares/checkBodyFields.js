module.exports = (fields = []) => {
  return (req, res, next) => {
    if(fields.every(field => field in req.body && hasContent(field, req.body))) next()
    else
      res.status(400).json({
        mensagem: 'Há campos ausentes ou inválidos.',
        erro: `É necessario informar corretamente os campos: [${fields}]`
      })
  }
}

function hasContent (field, body) {
  if(body[field] == '' || body[field] == undefined || new String(body[field]).trim().length == 0) return false
  else return true
}
  