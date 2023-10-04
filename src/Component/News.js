import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {
    const [articles,setArticles] = useState([])
    const [loading,setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const capitalize = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
    
    const updateNews= async()=> {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        console.log(parsedData)
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews()
        document.title = `${capitalize(props.category)} - NewsNation`;
    }, [])

    // const handleNxtclick = async () => {
    //     setPage(page + 1)
    //     updateNews()
    // }
    // const handlePrvclick = async () => {
    //     setPage(page - 1)
    //     updateNews()
    // }

    const fetchMoreData = async() => {
        setPage(page+1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.api_key}&page=${page+1}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setLoading(false)
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };


    
        return (
            <div div className="container mh-100 overflow-inherit " >
                
                    <h2 className="container justify-content-center" style={{marginTop: '80px'}} >Top Headlines - {capitalize(props.category)}</h2>
                    {loading && <Spinner />}
                    <div className="container">
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length!==totalResults}
                        
                    >
                    
                    {!loading && articles.map((e) => {
                        return <div key={e.key}> <NewsItem key={e.url} title={e.title} desc={e.description ? e.description.slice(0, 150) : ""} imgUrl={e.urlToImage} newsUrl={e.url} author={e.author} date={e.publishedAt} source={e.source.name} /></div>
                    })}
                    
                    </InfiniteScroll>
                    </div>
                
                {/* <div className="container d-flex justify-content-between mb-3">
                    <button disabled={this.state.page <= 1} onClick={this.handlePrvclick} type="button" className="btn btn-dark">&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} type="button" onClick={this.handleNxtclick} className="btn btn-dark">Next &rarr;</button>
                </div> */}



            </div>
        )
    
}

News.defaultProps = {
    country: 'in',
    pageSize: 15,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
} 

export default News





