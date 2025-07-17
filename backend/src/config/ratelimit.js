import { RateLimiterMemory } from "rate-limiter-flexible";
// rate limiter for 100 request per 1 minute
const rateLimiter = new RateLimiterMemory({
    points: 10,
    duration: 20,
});

export default rateLimiter;
