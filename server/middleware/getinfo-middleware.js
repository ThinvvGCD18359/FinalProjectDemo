const firebase = require("./firebase/admin");

function getInfoMiddleware(req, res, next) {
    firebase
       .auth()
       .getUser(req.query.uid)
       .then((userRecord) => {
          res.send(userRecord);
       })
       .catch((error) => {
          console.log('Error fetching user data:', error);
       });
 }
 
 module.exports = getInfoMiddleware;