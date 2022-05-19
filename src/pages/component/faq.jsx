import React, { useState } from 'react'
import { Question } from './accordion/faqAC';
import MyFaq from './accordion/MyFaq';

const Faq = () => {
    const [data, setData] = useState(Question);
  return (
    <>
        <section className="terms-condition-area">
            <div className="faq-top-area">
                <div className="header-content text-center">
                    <h1>Frequently Asked Questions</h1>
                    <p>Can't find the answer you're looking for? We shared some of our most frequently asked questions to help you out!</p>
                </div>
            </div>

            <div className="bottom-area">
                <div className="container">
                    <div className="accordionFAQ">
                        {
                            data.map((currentElem) =>{
                                const {id} = currentElem
                                return <MyFaq key={id} {...currentElem}/>
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
export default Faq;