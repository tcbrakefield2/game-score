import { GARFIELD_NEW_SCORE } from '../config/defaults.js';
import { getPlayer, getLeaderboardData, setLeaderboardData } from '../modules/game-session.js';

export function recordThomasHighScore() {
  const player = getPlayer();

  if (!player) {
    return {
      success: false,
      message: 'No player saved yet. Please save Thomas first.'
    };
  }

  const leaderboard = getLeaderboardData();

  leaderboard.push({
    name: player,
    score: THOMAS_NEW_SCORE
  });

  leaderboard.sort((a, b) => b.score - a.score);

  setLeaderboardData(leaderboard);

  return {
    success: true,
    message: `${player}'s score of ${THOMAS_NEW_SCORE} has been recorded.`
  };
}
