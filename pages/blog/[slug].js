import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked';
import Header from '../../components/Header';
import Head from 'next/head';

export default function PostPage({
  frontmatter: { title, date, readQuantity },
  slug,
  content,
}) {
  return (
    <>
    <Head>
      <title>{title}</title>
    </Head>
      <Header />
      <div className='card'>
        <h1>{title}</h1>
        <div style={{ display: 'flex', marginTop: 12, marginBottom: '1em' }}>
          <h6 style={{ fontWeight: 300 }}>{date}</h6>
          <h6 style={{ fontWeight: 300, marginLeft: 4 }}>·</h6>
          <h6 style={{ fontWeight: 300, marginLeft: 4 }}>{readQuantity}</h6>
        </div>
        <div className='post-body'>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
