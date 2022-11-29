//node app start entry (launched at port)

//import app file
const { app } = require("./app");

const server = app.listen(3000, () => { console.log(`app started at port ${server.address().port}`) })