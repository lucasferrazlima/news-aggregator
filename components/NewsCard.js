import { useRef } from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const colors = {
primary: '#1c1c1c',
secondary: '#ffffff',
accent: '#007aff'
}

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
  color: ${colors.primary};
  background-color: ${colors.secondary};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  flex-direction: column;
`
const ArticleImage = styled.img`
  width: 100%;
  height: auto;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-bottom: 0.5rem;
`

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0.5rem 1rem;
  font-family: 'Lato', 'Roboto', sans-serif;
`

const SourceName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  margin-top: 0.5rem;
  margin: 0 1rem;
  font-family: 'Lato', 'Roboto', sans-serif;
  color: ${colors.accent};
`

const ArticleDate = styled.div`
  font-size: 0.9rem;
  font-weight: lighter;
  margin: 0.1rem 1rem;
  font-family: 'Lato', 'Roboto', sans-serif;
  color: #5A5A5A;
`

const ReadMore = styled.a`
  font-size: 0.9rem;
  font-weight: lighter;
  margin: 0.1rem 1rem;
  font-family: 'Lato', 'Roboto', sans-serif;
  color: ${colors.accent};
  text-decoration: none;
  align-self: flex-end;
  margin-top: auto;
  margin-bottom: 1rem;
`

export default function NewsCard({ articles }) {

  const [cardsToShow, setCardsToShow] = useState(6)

  // Infinite scroll
  useEffect(() => {
    function handleScroll() {
      // Get the height of the window
      const windowHeight = window.innerHeight;
      // Get the height of the document (even content that is not visible)
      const fullHeight = document.body.clientHeight;
      // Get the number of pixels the user has scrolled
      const scrollTop = window.pageYOffset
      // If the user has scrolled to the bottom of the page, load 6 more cards
      if (fullHeight - (windowHeight + scrollTop) < 0) {
        setCardsToShow((prev) => prev + 6);
      } else if (scrollTop === 0) {
        setCardsToShow(6)
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
          <SourceName>{article.source.name}</SourceName> 
          <ArticleDate>{publishedDate.toLocaleDateString()}</ArticleDate>
          <CardTitle>{articleTitle}</CardTitle>
          <ReadMore href={article.url} target="_blank">Read full article</ReadMore>
        </Card>
        )
      })}
    </Feed>
  )
}
