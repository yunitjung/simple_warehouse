module.exports  = {
    success: (message, data) => ({
        success : true,
        message : message,
        data: data
    }),
    error: () => {}
}