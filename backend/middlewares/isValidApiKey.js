module.exports = (req, res, next) => {
    const apiKey = req.header('Authorization')
    
    if(apiKey?.trim() == process.env.APIKEY) next()
    else res.status(401).json({ mensagem: 'Apikey não informada.' })
}