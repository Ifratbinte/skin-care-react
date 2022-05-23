import React, { Component } from 'react'

class Tabs extends Component{

    state ={
      activeTab: this.props.children[0].props.label
    }

    changeTab = (tab) => {
  
      this.setState({ activeTab: tab });
    };

    render(){
      let content;
      let buttons = [];
      return (
        <div>
          {React.Children.map(this.props.children, child =>{
            buttons.push(child.props.label)
            if (child.props.label === this.state.activeTab) content = child.props.children
          })}
           
          <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
            <div className="tab-content">
              {content}
            </div>
        </div>
      );
    }
  }
  
  const TabButtons = ({buttons, changeTab, activeTab}) =>{
     
    return(
      <div className="tab-buttons">
        {buttons.map(button =>{
            return <button className={button === activeTab? 'active': ''} onClick={()=>changeTab(button)}>{button}</button>
        })}
      </div>
    )
  }
  
  const Tab = props =>{
    return(
      <React.Fragment>
        {props.children}
      </React.Fragment>
    )
  }

class ProductDetailsTab extends Component {
    
    render(){
      return(
        <div className="tabs">
            <Tabs>
                <Tab label="Description">
                        <div className="tab-pane fade show active" id="nav-description" role="tabpanel" aria-labelledby="nav-description-tab">
                            <p className="tab-para">Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing
                                aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit
                                culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.</p>
                        </div>
                </Tab>
                <Tab label="Review">
                        <div className="media review-person">
                            <img className="mr-3" src="assets/img/person.jpeg" alt="Generic placeholder"/>
                            <div className="media-body customer-comment">
                                <span><a href="/"><i className="fa fa-reply" aria-hidden="true"></i>Reply</a></span>
                                <h5>Jhon Doe</h5>
                                <p className="tab-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique illum exercitationem totam ab tempore quam ipsam nam vitae vero necessitatibus.</p>


                                <div className="media mt-3 customer-replay">
                                    <a className="pr-3" href="/">
                                        <img src="assets/img/logo.png" alt="Generic placeholder"/>
                                    </a>
                                    <div className="media-body ">
                                        <h5 className="mt-0">Skin Care</h5>
                                        <p>Thank You So Much.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="review-form mt-3">
                            <form>
                                <div className="row">
                                    <div className="col-lg-4 mb-sm-2 customer-info">
                                        <input type="text" className="form-control" placeholder="Name"/>
                                    </div>
                                    <div className="col-lg-4 mb-sm-2 customer-info">
                                        <input type="email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="col-lg-4 customer-info">
                                        <input type="text" className="form-control" placeholder="Phone"/>
                                    </div>
                                    <div className="col-lg-12 customer-msg">
                                        <textarea name="Message" className="form-control" placeholder="Type Your Review..."></textarea>
                                    </div>
                                    <div className="col-lg-3 customer-msg-send">
                                        <button type='submit' className='button button-sqr btn-transparent'>Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                </Tab>
                <Tab label="Specification">
                    <table class="table table-bordered">
                        <tr>
                            <th scope="col" >Color</th>
                            <td >Black</td>
                        </tr>
                        <tr>
                            <th scope="col" >Size</th>
                            <td>100Ml</td>
                        </tr>
                        <tr>
                            <th scope="col" >Brand</th>
                            <td> Lakeme</td>
                        </tr>
                    </table>
                    <p class="tab-para">Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which
                        every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the
                        greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p>
                </Tab>
            </Tabs>
        </div>
      )
    }
  }
  
export default ProductDetailsTab;