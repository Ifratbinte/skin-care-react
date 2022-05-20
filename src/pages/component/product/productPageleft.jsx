import React, {useState} from 'react'
import PriceRange from './priceRange'
import ProductCate from '../category/productCate'
import MyCate from '../category/MyCate';

const ProductPageleft = () => {
    const [productCate] = useState(ProductCate);
  return (
    <div className="col-lg-4 col-xl-3 ">
        <div className="left-sidebar p-3 shadow rounded m-3 pb-4">
            <div className="category-part bottom-border padding-btm">
                <h5 className="section-header">Categories</h5>
                <div className="list-group mt-4">
                    {
                        productCate.map((currentElem) => {
                            const {id} = currentElem
                            return <MyCate key={id} {...currentElem}/>
                        })
                    }
                    {/*  */}


                    {/* <div id="accordion1">
                        <div className="card border-0">
                            <div className="card-header border-0" id="headingTwo">

                                <a className="icon-collapse collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" href="/">
                            Men fasion
                        </a>

                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion1">
                                <div className="card-body p-2">
                                    <div className="list-group">
                                        <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                    </div>
                                    <div className="list-group">
                                        <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                    </div>
                                    <div className="list-group">
                                        <div id="subAccordion2">
                                            <div className="card border-0">
                                                <div className="card-header sub-card-headerOne border-0" id="subHeadingTwo">

                                                    <a className="icon-collapse-inside collapsed" data-toggle="collapse" data-target="#subCollapseTwo" aria-expanded="true" aria-controls="subCollapseTwo" href="/"><i className="fa fa-angle-right"></i>
                                                Lady bags
                                            </a>
                                                </div>
                                                <div id="subCollapseTwo" className="collapse" aria-labelledby="subHeadingTwo" data-parent="#subAccordion2">
                                                    <div className="card-body p-2">
                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group">
                                    <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                </div>
                                <div className="list-group">
                                    <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="accordion2">
                        <div className="card border-0">
                            <div className="card-header border-0" id="headingThree">

                                <a className="icon-collapse collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree" href="/">
                            Men fasion
                        </a>

                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion2">
                                <div className="card-body p-2">
                                    <div className="list-group">
                                        <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                    </div>
                                    <div className="list-group">
                                        <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                    </div>
                                    <div className="list-group">
                                        <div id="subAccordion3">
                                            <div className="card border-0">
                                                <div className="card-header sub-card-headerOne border-0" id="subHeadingThree">

                                                    <a className="icon-collapse-inside collapsed" data-toggle="collapse" data-target="#subCollapseThree" aria-expanded="true" aria-controls="subCollapseThree" href="/"><i className="fa fa-angle-right"></i>
                                                Lady bags
                                            </a>
                                                </div>
                                                <div id="subCollapseThree" className="collapse" aria-labelledby="subHeadingThree" data-parent="#subAccordion3">
                                                    <div className="card-body p-2">
                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group">
                                    <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                </div>
                                <div className="list-group">
                                    <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="accordion3">
                        <div className="card border-0">
                            <div className="card-header border-0" id="headingFour">

                                <a className="icon-collapse collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour" href="/">
                            Supermarket
                        </a>

                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion3">
                                <div className="card-body p-2">
                                    <div className="list-group">
                                        <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                    </div>
                                    <div className="list-group">
                                        <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                    </div>
                                    <div className="list-group">
                                        <div id="subAccordion4">
                                            <div className="card border-0">
                                                <div className="card-header sub-card-headerOne border-0" id="subHeadingFour">

                                                    <a className="icon-collapse-inside collapsed" data-toggle="collapse" data-target="#subCollapseFour" aria-expanded="true" aria-controls="subCollapseFour" href="/"><i className="fa fa-angle-right"></i>
                                                Lady bags
                                            </a>
                                                </div>
                                                <div id="subCollapseFour" className="collapse" aria-labelledby="subHeadingFour" data-parent="#subAccordion4">
                                                    <div className="card-body p-2">
                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group">
                                    <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                </div>
                                <div className="list-group">
                                    <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="accordion4">
                        <div className="card border-0">
                            <div className="card-header border-0" id="headingFive">

                                <a className="icon-collapse collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive" href="/">
                            Supermarket
                        </a>

                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordion4">
                                <div className="card-body p-2">
                                    <div className="list-group">
                                        <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                    </div>
                                    <div className="list-group">
                                        <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                    </div>
                                    <div className="list-group">
                                        <div id="subAccordion5">
                                            <div className="card border-0">
                                                <div className="card-header sub-card-headerOne border-0" id="subHeadingFive">

                                                    <a className="icon-collapse-inside collapsed" data-toggle="collapse" data-target="#subCollapseFive" aria-expanded="true" aria-controls="subCollapseFive" href="/"><i className="fa fa-angle-right"></i>
                                                Lady bags
                                            </a>
                                                </div>
                                                <div id="subCollapseFive" className="collapse" aria-labelledby="subHeadingFive" data-parent="#subAccordion5">
                                                    <div className="card-body p-2">
                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>

                                                        <div className="list-group">
                                                            <a href="/" className="list-group-item list-group-item-action border-0"><i
                                                            className="fa fa-angle-right"></i>
                                                        Small bags
                                                    </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-group">
                                    <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                </div>
                                <div className="list-group">
                                    <a href="/" className="list-group-item list-group-item-action border-0"><i
                                    className="fa fa-angle-right"></i>
                                Lady bags
                            </a>
                                </div>

                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="price-range-slider bottom-border pb-5 mt-2">
                <h5 className="section-header">Price Range</h5>
                <PriceRange />
            </div>

            <div className="size bottom-border pb-4 mt-2">
                <h5 className="pb-3 section-header">Size</h5>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input"/>
                    <label className="custom-control-label" htmlFor="customRadio1">Small</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input"/>
                    <label className="custom-control-label" htmlFor="customRadio2">Medium</label>
                </div>
                <div className="custom-control custom-radio">
                    <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input"/>
                    <label className="custom-control-label" htmlFor="customRadio3">Large</label>
                </div>
            </div>

            <div className="brand bottom-border pb-4 mt-2">
                <h5 className="pb-3 section-header">Brand</h5>
                <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="customControlAutosizing"/>
                    <label className="custom-control-label" htmlFor="customControlAutosizing">Oppo</label>
                </div>

                <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="customControlAutosizing1"/>
                    <label className="custom-control-label" htmlFor="customControlAutosizing1">Samsung</label>
                </div>

                <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="customControlAutosizing2"/>
                    <label className="custom-control-label" htmlFor="customControlAutosizing2">Apple</label>
                </div>

                <div className="custom-control custom-checkbox mr-sm-2">
                    <input type="checkbox" className="custom-control-input" id="customControlAutosizing3"/>
                    <label className="custom-control-label" htmlFor="customControlAutosizing3">Vivo</label>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ProductPageleft;