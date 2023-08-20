module.exports = (campos = []) => {
    return (req, res, next) => {
      if(campos.length > 0) {
        
      } else next()
    }
  }
  