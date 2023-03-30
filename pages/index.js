import NewsCard from '../components/NewsCard'

// Fetching data from NewsAPI.org
export async function getStaticProps() {
  const apiKey = process.env.NEWSAPI_KEY
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
  const response = await fetch(url)
  const data = await response.json()
  const articles = data.articles
  return {
    props: {
      articles
    },
  }
}

const test = 'test'

export default function Home({ articles }) {
  return (
    <>
      <h1>News Aggregator</h1>
      <NewsCard articles={articles}/>
    </>
  )
}
