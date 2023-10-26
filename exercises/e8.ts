// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
//  must have destructured parameters
import { p } from "vitest/dist/index-5aad25c1";
import { Planet, data } from "../data/data";

type Parameters = {
  planets: Planet[];
  moonName: string;
  moons?: string[];
};

export function findPlanetByMoon({ moonName, planets }: Parameters) {
  return planets.find((planet) =>
    planet.moons?.some((moon) => moon.toLowerCase() === moonName.toLowerCase())
  );
}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
