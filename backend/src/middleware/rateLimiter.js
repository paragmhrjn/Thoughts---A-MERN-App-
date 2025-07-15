import rateLimiter from "../config/ratelimit.js";

const rateLimiterMD = async (req, res, next) => {
    try {
        const rateLimiterRes = await rateLimiter.consume(req.ip);
        next();
    } catch (error) {
        console.log("Rate Limit Error", error);
        next(res.status(429).json({
            message: 'Too many requests from this IP, please try again later.'
        }));
    }
};

export default rateLimiterMD;
