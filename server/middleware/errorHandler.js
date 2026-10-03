const errorHandler = (err, req, res, next) => {
    console.log("Error: ", err.message)


    if (err.status) {
        return res.status(err.status).json({
            error: err.message,
            status: err.status,
        })
    }

    if (err.code === "23505") {
        return res.status(409).json({
            error: "This record already exists",
            status: 409
        })
    }


    if (err.name === "ValidationError") {
        return res.status(400).json({
            error: err.message,
            status: 400,
        });
    }

    res.status(500).json({
        error: "Internal server error",
        status: 500,
    });
};


export default errorHandler;