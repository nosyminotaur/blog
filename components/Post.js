import Link from 'next/link'

export default function Post({ post }) {
  return (
    <div className='card'>
      <Link passHref href={`/blog/${post.slug}`}>
        <h2 role='button' style={{ color: '#d0125d' }}>{post.frontmatter.title}</h2>
      </Link>
      <div style={{ display: 'flex', marginTop: 12, marginBottom: 4 }}>
        <h6 style={{ fontWeight: 300 }}>{post.frontmatter.date}</h6>
        <h6 style={{ fontWeight: 300, marginLeft: 4 }}>·</h6>
        <h6 style={{ fontWeight: 300, marginLeft: 4 }}>{post.frontmatter.readQuantity}</h6>
      </div>

      <p style={{ fontWeight: 400 }}>{post.frontmatter.excerpt}
        <Link passHref href={`/blog/${post.slug}`}><span style={{ color: '#d0125d', marginLeft: 8 }} role='button' className='more'>
          More
        </span>
        </Link></p>
    </div>
  )
}
