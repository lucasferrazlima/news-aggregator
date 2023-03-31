import { useRef } from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

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
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

export default function NewsCard({ articles }) {

  const [cardsToShow, setCardsToShow] = useState(6)

  useEffect(() => {
    function handleScroll() {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
    
      const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
      if (fullHeight - (windowHeight + scrollTop) < 50) {
        setCardsToShow((prev) => prev + 6);
      }
    }
  
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [cardsToShow])

  return (
    <Feed className='feed'>
      
      {articles.slice(0, cardsToShow).map((article) => {
        
        // Remove the source name from the title
        const articleTitle = article.title.replace(` - ${article.source.name}`, '')

        // Format the published date
        const publishedDate = new Date()
        
        return(
          <Card key={article.url} >
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
