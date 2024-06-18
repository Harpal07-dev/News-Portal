import { useEffect, useState } from "react"
import NewsCard from "./NewsCard";
import { Pagination } from "./Pagination";

const NewsPanel = ({category}) => {

    const [article,setArticle]=useState([])

    const [currentPage,setCurrentPage]=useState(1)
    const [postPerPage,setPostPerPage]=useState(9)

    useEffect(()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url)
        .then(response=>response.json())
        .then(data=>{
            setArticle(data.articles)
        })
    },[category])

    const lastPageIndex=currentPage * postPerPage;
    const firstPageIndex=lastPageIndex - postPerPage ;
    const currentPost=article.slice(firstPageIndex,lastPageIndex)
  return (
    <div>
        <h2 className="text-center mt-4">Today's <span className="badge bg-danger">News</span></h2>
        {currentPost.map((news,index)=>{
            return <NewsCard key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/> 
            
        })}
        <Pagination totalPosts={article.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  )
}

export default NewsPanel