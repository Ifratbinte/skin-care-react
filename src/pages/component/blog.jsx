import React, {useState} from 'react'
import BlogItems from './blogContent/blogItems'

const Blog = () => {

  const [blogs] = useState(BlogItems);

  return (
    <div class="blog-video-page">
          <div class="container">
              <div class="blog-video-title text-center">
                  <h3>All Blog Items</h3>
              </div>
              <div class="blog-items">
                  <div class="row">
                    {
                      blogs.map((items) => {
                        const{id, link, title, date} = items;
                        return(
                          <div key={id} class="col-lg-4 col-md-4 col-sm-12">
                            <div class="single-blog-item-grid mb-4">
                                <a href="/" class="single-blog-item">
                                    <div class="single-blog-item-video">
                                        <div class="embed-responsive embed-responsive-16by9">
                                            <iframe title="blog" src={link}></iframe>
                                        </div>
                                    </div>
                                    <div class="single-blog-item-text">
                                        <h3>{title}</h3>
                                        <h4>{date}</h4>
                                    </div>
                                </a>
                            </div>
                          </div>
                        )
                      })
                    }
                      
                  </div>
                  <a href="/" class="loadMore-btn1 seemore-btn1 my-3" id=" ">Load More</a>
              </div>
          </div>
      </div>
  )
}
export default Blog;