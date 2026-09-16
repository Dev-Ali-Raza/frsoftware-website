import { Link, useLocation } from 'react-router-dom'

/**
 * Link that understands home-page section anchors.
 *   href="#services"  → on "/" renders a plain <a href="#services"> (native scroll)
 *                     → elsewhere renders <Link to="/#services"> (route home, then scroll)
 *   href="/…"         → <Link>
 *   anything else     → plain <a>
 */
export default function SmartLink({ href, children, ...rest }) {
  const { pathname } = useLocation()

  if (href?.startsWith('#')) {
    if (pathname === '/') return <a href={href} {...rest}>{children}</a>
    return <Link to={`/${href}`} {...rest}>{children}</Link>
  }
  if (href?.startsWith('/')) return <Link to={href} {...rest}>{children}</Link>
  return <a href={href} {...rest}>{children}</a>
}
