
const Navbar = ({setCategory}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className='badge'>NewsPedia</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    
                        <div className="navbar-nav mx-auto">
                            <a className="nav-link " href="#" onClick={()=>{setCategory('technology')}}>TECHNOLOGY</a>
                            
                            <a className="nav-link" href="#" onClick={()=>{setCategory('business')}}>BUSINESS</a>              
                            <a className="nav-link" href="#" onClick={()=>{setCategory('entertainment')}}>ENTERTAINMENT</a>              
                            <a className="nav-link" href="#" onClick={()=>{setCategory('health')}}>HEALTH</a>              
                            <a className="nav-link" href="#" onClick={()=>{setCategory('science')}}>SCIENCE</a>                               <a className="nav-link" href="#" onClick={()=>{setCategory('sports')}}>SPORTS</a>   
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar