// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid, data } from "../data/data";
import { maxBy } from "./e17";

/* export function getGreatestDiscoveryYear(asteroids:Asteroid[]) {
    const mostPrevalentDiscoveryYear = asteroids.map((asteroid) => asteroid.discoveryYear )
    .reduce((count, years) => {
         count.set(years,(count.get(years)||0)+1);
         return count;
    },new Map())
} */
export function getGreatestDiscoveryYear(asteroids:Asteroid[]) {
    const mostPrevalentDiscoveryYear = asteroids.map((asteroid) => asteroid.discoveryYear )
    .reduce((count, years) => {
         count[years] =(count[years] ||0)+1
         return count;
    },{})
    return parseInt(maxBy(Object.entries(mostPrevalentDiscoveryYear), el => el[1])[0]);
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
