const faker = require("faker");

const appRouter = (app) => {
    app.get('/',  (req, res) => {
        res.status(200).send("Welcome to a restful API");
    });

    // NOTE: Creates a single user
    app.get('/user', (req, res) => {
        var data = ({
            firstName: faker.name.firstName(),
            lastname: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        });
        res.status(200).send(data);
    });

    // NOTE: Creates a list of users equal to the number entered.
    app.get('/users/:num', (req, res) => {
        let users = [];
        let num = req.params.num;
        if (isFinite(num) && num > 0) {
            for(i = 0; i <= num; i++) {
                users.push({
                    firstname: faker.name.firstName(),
                    lastname: faker.name.lastName(),
                    username: faker.internet.userName(),
                    email: faker.internet.email()
                });
            }
            res.status(200).send(users);
        } else {
            res.status(400).send({ message: "invalid user number"});
        }
    });
}

module.exports = appRouter;