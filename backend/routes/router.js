module.exports = (app) => {
    app.use('/v1', require('./apidoc')(app))
  
    app.use('/v1/login', require('./login')(app))
  }