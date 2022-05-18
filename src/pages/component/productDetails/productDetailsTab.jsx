import React from 'react'

function ProductDetailsTab() {
  return (
    <div class="product-details-tab section-title">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-xs-12 ">
                    <nav>
                        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-description-tab" data-toggle="tab" href="#nav-description" role="tab" aria-controls="nav-description" aria-selected="true">Description</a>
                            <a class="nav-item nav-link" id="nav-review-tab" data-toggle="tab" href="#nav-review" role="tab" aria-controls="nav-review" aria-selected="false">Review</a>
                            <a class="nav-item nav-link" id="nav-specification-tab" data-toggle="tab" href="#nav-specification" role="tab" aria-controls="nav-specification" aria-selected="false">Specification</a>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                            <p class="tab-para">Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing
                                aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit
                                culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
                        </div>
                        <div class="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                            <div class="media review-person">
                                <img class="mr-3" src="assets/img/person.jpeg" alt="Generic placeholder"/>
                                <div class="media-body customer-comment">
                                    <span><a href="/"><i class="fa fa-reply" aria-hidden="true"></i>Reply</a></span>
                                    <h5>Jhon Doe</h5>
                                    <p class="tab-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum exercitationem totam ab tempore quam ipsam nam vitae vero necessitatibus.</p>


                                    <div class="media mt-3 customer-replay">
                                        <a class="pr-3" href="/">
                                            <img src="assets/img/logo.png" alt="Generic placeholder"/>
                                        </a>
                                        <div class="media-body ">
                                            <h5 class="mt-0">Skin Care</h5>
                                            <p>Thank You So Much.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="review-form mt-3">
                                <form>
                                    <div class="row">
                                        <div class="col-lg-4 mb-sm-2 customer-info">
                                            <input type="text" class="form-control" placeholder="Name"/>
                                        </div>
                                        <div class="col-lg-4 mb-sm-2 customer-info">
                                            <input type="email" class="form-control" placeholder="Email"/>
                                        </div>
                                        <div class="col-lg-4 customer-info">
                                            <input type="text" class="form-control" placeholder="Phone"/>
                                        </div>
                                        <div class="col-lg-12 customer-msg">
                                            <textarea name="Message" class="form-control" placeholder="Type Your Review..."></textarea>
                                        </div>
                                        <div class="col-lg-3 customer-msg-send">
                                            <input type="submit" value="Send"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="nav-specification" role="tabpanel" aria-labelledby="nav-specification-tab">
                            <table class="table table-bordered">
                                <h1>Lorem ipsum dolor sit amet.</h1>
                                {/* <tr>
                                    <th scope="col" style="width:20%">Color</th>
                                    <td scope="col">Black</td>
                                </tr>
                                <tr>
                                    <th scope="col" style="width:20%">Size</th>
                                    <td scope="col">100Ml</td>
                                </tr>
                                <tr>
                                    <th scope="col" style="width:20%">Brand</th>
                                    <td scope="col">Fancy </td>
                                </tr> */}

                            </table>
                            <p class="tab-para">Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which
                                every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the
                                greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
export default ProductDetailsTab;