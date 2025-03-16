import express from "express";

const router = express.Router();

router.post("/signup", (res,req) => {
    res.json({
        data: "You hit the signup endpoint",
    });
});
router.post("/login", (res,req) => {
    res.json({
        data: "You hit the login endpoint",
    });
});
router.post("/logout", (res,req) => {
    res.json({
        data: "You hit the logout endpoint",
    });
});

export default router;