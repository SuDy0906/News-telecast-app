import React from 'react';

const NewsItem = (props)=> {
    
        let { title, desc, imgUrl, newsUrl, author, date, source } = props;
        return (
            <div className="card mb-3 mt-3" style={{ backgroundColor: "#bdbdbd" }}>
                
                <div className="row g-0">
                
                    <div className="col-md-4">
                        <img className="card-img-top img-fluid rounded" src={imgUrl ? imgUrl : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png"} alt="..." />
                    </div>
                    <div className="col-md-8" style={{ backgroundColor: "#bdbdbd" }}>
                    <div style = {{display:'flex', justifyContent:'flex-end', position:'absolutue', right:'0'}}><span className=" badge rounded-pill bg-danger" >{source}</span></div>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{desc}...</p>

                            <div className="d-flex justify-content-between">
                                <a href={newsUrl} target="_blank" className="btn btn-primary">Read more...</a>
                                <p className="card-text"><small className="text-body-secondary">by {author ? author : "unknown"} on {new Date(date).toGMTString()}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    
}

export default NewsItem;
