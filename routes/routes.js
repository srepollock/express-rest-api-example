const appRouter = (app) => {
    app.get('/',  (req, res) => {
        res.status(200).send("Welcome to a restful API");
    });
}

module.exports = appRouter;