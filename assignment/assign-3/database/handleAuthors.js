const authenticate = require("./authenticate");
const {getAuthors,
    putAuthors,
    postAuthors,
    patchAuthors,
    deleteAuthors} = require("./functions")



const handleAuthors = (req,res) => {
    if(req.url=== "/authors"){
      switch (req.method) {
        case ("GET"):
            authenticate(req,res,getAuthors);
            break;
        case ("PUT"):
            authenticate(req,res,putAuthors);
            break;
        case ("POST"):
            authenticate(req,res,postAuthors);
            break;
        case ("PATCH"):
            authenticate(req,res,patchAuthors);
            break;
        case ("DELETE"):
            authenticate(req,res,deleteAuthors);
            break;
      
        default:
            break;
      }
    }
}