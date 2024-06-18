import image from '../assets/news.webp'

const NewsCard = ({title,description,src,url}) => {
    return (
        <div className="d-inline-block ">
            <div className="card bg-dark text-light mx-4 my-3 mb-3 py-2 px-2" style={{maxWidth:'345px'
            }}>
                <img src={src?src:image} style={{height:'200px',width:'327px'}} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title.slice(0,50)}</h5>
                    <p className="card-text">{description && title !== '[Removed]' ? description.slice(0,90) : 'This news didnot had any description.To seee the new click on Read more and read everything about the news.'}</p>
                    <a href={url} className="btn btn-primary">{title == '[Removed]' ? 'news removed' : 'read more'}</a>
                </div>
            </div>
        </div>
    )
}

export default NewsCard