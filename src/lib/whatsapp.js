import { company } from '../data/site'

/**
 * WhatsApp deep-link helpers.
 *
 * wa.me links show a "Continue to chat" interstitial on desktop, which feels
 * broken. On phones we use wa.me (opens the app directly); on desktop we go
 * straight to WhatsApp Web / the desktop app via web.whatsapp.com.
 */
const NUMBER = company.whatsappNumber            // digits only, with country code
const TEXT = encodeURIComponent(company.whatsappMessage || '')

export const waMeUrl = `https://wa.me/${NUMBER}${TEXT ? `?text=${TEXT}` : ''}`
export const waWebUrl = `https://web.whatsapp.com/send?phone=${NUMBER}${TEXT ? `&text=${TEXT}` : ''}`

const isMobile = () =>
  typeof navigator !== 'undefined' &&
  /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent)

/** Click handler: opens WhatsApp directly on both mobile and desktop. */
export function openWhatsApp(e) {
  if (e) e.preventDefault()
  window.open(isMobile() ? waMeUrl : waWebUrl, '_blank', 'noopener')
}

/** Props to spread on any <a>: `<a {...whatsappLinkProps}>` */
export const whatsappLinkProps = {
  href: waMeUrl,
  target: '_blank',
  rel: 'noreferrer',
  onClick: openWhatsApp,
}
