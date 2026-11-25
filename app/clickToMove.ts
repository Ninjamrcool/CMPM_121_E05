import { Controller } from "./controllers.ts";
import { Direction, Position } from "../core/mod.ts";

function getClickedDirection(
  playerPosition: Position,
  clickedPosition: Position,
): Direction | undefined {
  const xDifference = clickedPosition.x - playerPosition.x;
  const yDifference = clickedPosition.y - playerPosition.y;

  if (xDifference === 1 && yDifference === 0) {
    return "right";
  }
  if (xDifference === -1 && yDifference === 0) {
    return "left";
  }

  if (yDifference === 1 && xDifference === 0) {
    return "down";
  }
  if (yDifference === -1 && xDifference === 0) {
    return "up";
  }
  return undefined;
}

export const clickToMove: Controller = {
  label: "Click a neighboring tile",
  attach(session, board) {
    const stop = board.onTileClick(
      (at) => {
        const player = session.getState().puzzle.player;
        const direction = getClickedDirection(player, at);
        if (direction !== undefined) {
          session.dispatch({ kind: "move", direction: direction });
        }
      },
    );
    return stop;
  },
};
