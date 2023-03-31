import Image from 'next/image'
import styled from 'styled-components'

const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 3rem;
  padding: 1rem;
`

const Card = styled.div`
  width: 100%;
  height: auto;
  background-color: lightblue;
`
const ArticleImage = styled.img`
  width: 100%;
  height: auto;
`

export default function NewsCard({ articles }) {
  return (
    <Feed>
      {articles.map((article) => (
        <Card key={article.url}>
          <p>{article.title}</p>
            <ArticleImage src={article.urlToImage} alt={article.description} />
        </Card>
      ))}
    </Feed>
  )
}
