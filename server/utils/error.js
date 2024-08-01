const errorhandler = (statusCode , message , type="")=>{
    const error = new Error()
    error.statusCode = statusCode
    error.message = message
    error.type = type

    return error;
}
 
module.exports =  {
    errorhandler,
}
