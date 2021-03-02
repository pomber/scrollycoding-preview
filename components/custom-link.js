import Link from 'next/link'

export default function CustomLink(props) {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const classes = 'text-blue-700'
  if (isInternalLink) {
    return (
      <Link href={href}>
        <a {...props} className={classes} />
      </Link>
    )
  }
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      className={classes}
    />
  )
}
