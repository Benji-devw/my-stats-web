export default function calculateTotalStats(playerMatches) {
  // Créer un objet pour stocker les totaux pour chaque joueur
  const totals = {};

  // Parcourir chaque match de joueur
  playerMatches.forEach(match => {
    // Si le joueur n'est pas encore dans l'objet totals, l'ajouter
    if (!totals[match.player_id]) {
      totals[match.player_id] = {
        player_id: match.player_id,
        totalGoals: 0,
        totalAssists: 0,
        totalShoots: 0,
        totalAverage: 0,
        matchCount: 0
      };
    }

    // Ajouter les statistiques de ce match aux totaux du joueur
    totals[match.player_id].totalGoals += match.goals;
    totals[match.player_id].totalAssists += match.assists;
    totals[match.player_id].totalShoots += match.shoots;
    totals[match.player_id].totalAverage += match.average;
    totals[match.player_id].matchCount++;
  });

  // Calculer les moyennes pour chaque joueur
  // for (const playerId in totals) {
  //   totals[playerId].averageGoals = totals[playerId].totalGoals / totals[playerId].matchCount;
  //   totals[playerId].averageAssists = totals[playerId].totalAssists / totals[playerId].matchCount;
  //   totals[playerId].averageShoots = totals[playerId].totalShoots / totals[playerId].matchCount;
  //   totals[playerId].averageAverage = totals[playerId].totalAverage / totals[playerId].matchCount;
  // }

  return totals;
}
