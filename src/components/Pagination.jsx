import React from 'react'
import './Pagination.css'

export const Pagination = ({totalPosts,postPerPage,setCurrentPage,currentPage}) => {
  
  
    let page=[]

    for(let i=1 ; i <= Math.ceil(totalPosts/postPerPage); i++){
        page.push(i)
    }
    return (
    <div className='pagination'>
    {page.map((pages,index)=>{

        return <button key={index} onClick={()=>{setCurrentPage(pages)}} className={pages == currentPage ? 'active': ''}>{pages}</button>

    })}    
    </div>
  )
}
