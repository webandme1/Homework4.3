const users = [
    {
        id: 1,
        username: "bsmithw3",
        email: "bsmith@mail.com",
        password: "bsmithw3_2023",
        name: "Brandon Smith"
    },
    {
        id: 2,
        username: "swoow3",
        email: "swoo@mail.com",
        password: "swoo_w3schools",
        name: "Samantha Woo"
    }
];

const login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send("Login successful");
    } else {
        res.send("Login failed");
    }
};

const register = (req, res) => {
    const { username, email, password, name } = req.body;
    if (username && email && password && name) {
        const newUser = {
            id: users.length + 1,
            username,
            email,
            password,
            name
        };
        users.push(newUser);
        res.send("User registered successfully");
    } else {
        res.status(400).send("All fields are required");
    }
};

module.exports = { login, register };
