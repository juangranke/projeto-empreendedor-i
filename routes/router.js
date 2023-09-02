module.exports = (app) => {
    app.use('/v1', require('./apidoc/index')(app))
  
    app.use('/v1/login', require('./login')(app))
    app.use('/v1/user', require('./user')(app))
    app.use('/v1/schedule', require('./schedule')(app))
  }