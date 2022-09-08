import logements from '../assets/logements.json'

export function getDatas() {
  return logements
}

export function getIdProduct(id) {
  return logements.find((el) => el.id === id)
}
