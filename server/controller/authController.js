import jwt from "jsonwebtoken"
import User from "../model/usersSchema.js"
import bcrypt from "bcrypt"

export const register = async (req, res) => {
    try {
        const { username, password, role } = req.body
        console.log(req.body);


        const userExist = await User.findOne({ username })

        if (userExist) {
            return res.status(200).json({ message: "User var" })
        }

        const rounds = 10
        const hashedPassword = await bcrypt.hashSync(password, rounds)

        const newUser = new User(
            {
                username,
                password: hashedPassword,
                role
            }
        )

        await newUser.save();
        const token = jwt.sign(
            {
                userId: newUser._id,
                userName: newUser.username,
                role:"User"
            },
            process.env.JWT_SECRETKEY,
            { expiresIn: "1h" }
        );
       
        res.status(201).json({ message: "User Created", token });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });

    }
}


export const login = async (req, res) => {
    try {
        const { username, password  } = req.body

        const user = await User.findOne({ username })
        console.log(user);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).send("Wrong user");
        }

        const token = jwt.sign({
            userId: user._id,
            userName : user.username,
            role:user.role
        }, process.env.JWT_SECRETKEY, { expiresIn: "1h" })

        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}