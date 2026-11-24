import { hasCrate, Puzzle } from "../core/mod.ts";

export function GoalTracker({ puzzle }: { puzzle: Puzzle }) {
  const cratesOnGoals = puzzle.layout.goals.filter((goal) =>
    hasCrate(puzzle, goal)
  );

  return (
    <p>Goals filled: {cratesOnGoals.length} of {puzzle.layout.goals.length}</p>
  );
}
