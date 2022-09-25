import logements from '../assets/logements.json'

/**
 * Il renvoie le produit avec l'identifiant qui correspond à l'identifiant passé en paramètre
 * @returns La fonction getIdProduct renvoie le logement qui a le même identifiant que l'identifiant
 * passé en paramètre.
 */
export function getDatas() {
  return logements
}

export function getIdProduct(id) {
  return logements.find((el) => el.id === id)
}
