export default function NewsCard({ articles }) {
  return(
    <>
    {articles.map(article => {
      return <p key={article.url}>{article.title}</p>
    })
    }
    </>
  )
}