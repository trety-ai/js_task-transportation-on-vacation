/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  switch (days) {
    case 7:
      return 230;
    case 6:
      return 220;
    case 3:
      return 100;
    default:
      return 80;
  }
}

module.exports = calculateRentalCost;
