import { RateLimiterMemory } from "rate-limiter-flexible";
// rate limiter for 100 request per 1 minute
const rateLimiter = new RateLimiterMemory({
    points: 100,
    duration: 60,
});

export default rateLimiter;
