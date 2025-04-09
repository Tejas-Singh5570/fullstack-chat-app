import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
    if (!userId) {
        throw new Error("User ID is required for token generation");
    }

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        httpOnly: true, // Prevent XSS attacks
        sameSite: "strict", // Protect against CSRF attacks
        secure: process.env.NODE_ENV !== "development", // Use secure cookies in production
    });

    console.log("Generated Token:", token); // Debugging

    return token; // Optional, only if you need to use the token elsewhere
};
