import Jwt, {} from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
export default function authmiddleware(req, res, next) {
    const token = req.headers["authorization"] || "";
    const decoded = Jwt.verify(token, JWT_SECRET);
    if (decoded) {
        req.userid = decoded.id;
        next();
    }
    else {
        res.status(403).json({
            message: "unauthorized user"
        });
    }
}
//# sourceMappingURL=Authmiddleware.js.map