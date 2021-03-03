export function results(nutrition) {
  return Object.keys(nutrition)
    .map(dish => Object.keys(nutrition[dish])
      .map(item => nutrition[dish][item].nutrients))
    .reduce((acc, curr) => {
      acc.push(...curr)
      return acc
    }, []).reduce((sum, item) => {
      if (item.PROCNT) {
        sum[0] += item.PROCNT
      }
      if (item.FAT) {
        sum[1] += item.FAT
      }
      if (item.CHOCDF) {
        sum[2] += item.CHOCDF
      }
      if (item.ENERC_KCAL) {
        sum[3] += item.ENERC_KCAL
      }
      return sum
    }, [0, 0, 0, 0])
}
