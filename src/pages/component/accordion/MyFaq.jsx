import React, {useState} from 'react'

const MyFaq = ({question, answer}) => {
    const [show, setShow] = useState(false);
  return (
    
    <>
        <div class="card accordion-card">
            <div class="card-header">
                <button class="btn border-0" onClick={() => setShow(!show)}>
                    {show? <i className="icon icon-minus fa fa-minus"></i> : <i className="icon icon-plus fa fa-plus"></i> }
                    <span>{question}</span>
                </button>
            </div>
            {show && <div class="card-body collapse-content">
                <p className='mb-0'>{answer}</p>
            </div>}
        </div>
    </>

  )
}
export default MyFaq;