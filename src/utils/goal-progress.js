export function progress(goal, currentWeight) {
  if (goal.mode === 250) {
    return lostWeight(goal, currentWeight)
  } else if (goal.mode === -100) {
    return gainWeight(goal, currentWeight)
  } else {
    return keepWeight(goal, currentWeight)
  }
}

function lostWeight(goal, currentWeight) {
  const dif = 100 / (goal['desired-weight'] - goal.weight)
  const current = currentWeight - goal.weight
  let result = dif * current
  if (result > 100) {
    result = 100
  } else if (result < 0) {
    result = 0
  }
  return Math.round(result)
}

function gainWeight(goal, currentWeight) {
  const dif = 100 / (goal.weight - goal['desired-weight'])
  const current = goal.weight - currentWeight
  let result = dif * current
  if (result > 100) {
    result = 100
  } else if (result < 0) {
    result = 0
  }
  return Math.round(result)
}

function keepWeight(goal, currentWeight) {
  const max = +currentWeight + 10
  const min = currentWeight - 10
  if (currentWeight < goal.weight) {
    return Math.round((100 / goal.weight) * min)
  } else if (currentWeight > goal.weight) {
    return Math.round((100 / max) * goal.weight)
  } else {
    return 100
  }
}
