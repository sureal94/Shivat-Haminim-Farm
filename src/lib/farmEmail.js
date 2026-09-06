export const FARM_EMAIL = 'shivat.haminim.farm@gmail.com'

export function openFarmMailto(subject, body) {
  const url = `mailto:${FARM_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = url
}
