import { useRouter } from 'next/router';
import NewsCard from '../../components/NewsCard';
import Menu from '../../components/Menu';

export async function getServerSideProps(context) {
  const apiKey = process.env.NEWSAPI_KEY
  const category = context.params.category;
  let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=100&category=${category}&apiKey=${apiKey}`
  const response = await fetch(url)
  const data = await response.json()
  const articles = data.articles
  return {
    props: {
      articles
    },
  }
}

export default function Category({ articles }) {
  const router = useRouter();
  const { category } = router.query;
  
  // Render the articles for the specified category
  return (
    <>
      <h1>News Aggregator - {category}</h1>
      <NewsCard articles={articles}/>
    </>
  )
}
