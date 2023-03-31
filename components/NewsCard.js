import Image from 'next/image'
import styled from 'styled-components'

const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 3rem;
  padding: 1rem;
  padding-left: 10%;
  padding-right: 10rem;
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
      {articles.map((article) => {
        
        // Remove the source name from the title
        const articleTitle = article.title.replace(` - ${article.source.name}`, '')

        // Format the published date
        const publishedDate = new Date()

        return(
          <Card key={article.url}>
          <ArticleImage src={article.urlToImage} alt={article.description} />
          <div>{article.source.name}</div>
          <div>{publishedDate.toLocaleDateString()}</div>
          <p>{articleTitle}</p>
          <a href={article.url} target="_blank">Read full article</a>
        </Card>
        )
      })}
    </Feed>
  )
}
