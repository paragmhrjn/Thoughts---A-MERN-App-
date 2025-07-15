import { RateLimiterMemory } from "rate-limiter-flexible";

const rateLimiter = new RateLimiterMemory({
    points: 10, // Corrected from 'point' to 'points'
    duration: 20,
});

export default rateLimiter;
