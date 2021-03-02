import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import Link from 'next/link'

export default function PostPreview({ title, date, excerpt, author, slug }) {
  return (
    <div className="my-40">
      <h3 className="text-3xl mb-3 leading-snug font-bold">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  )
}
