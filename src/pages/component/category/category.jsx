import React, {useState} from 'react'
import CategoryItems from './categoryItems'

const Category = () => {

  const [category] = useState(CategoryItems);

  return (
    <section class="category-item section-gap">
          <div class="container">
              <div class="category">
                  <div class="row">
                      <div class="col-md-12">
                          <div class="section-title category-title">
                              <h3>Category</h3>
                          </div>
                      </div>
                  </div>

                  <div class="row">
                    {
                      category.map((elem) => {
                        const { id, image, name } = elem;
                        return(
                          <div key={category.id} class="col-lg-2 col-md-3 col-sm-4 col-6">
                            <div class="ta-single-product">
                              <a href="product.html">
                                  <div class="p-4 text-center">
                                      <img class="s-product-img" src={image} alt=""/>
                                      <h5>{name}</h5>
                                  </div>
                              </a>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div>
              </div>
          </div>
      </section>
  )

}


 

export default Category;