import React, {useState} from 'react'

const MyCate = ({category}) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="card border-0">
                <div className="card-header d-flex justify-content-between align-items-center py-2 px-3 border-0"  onClick={() =>setShow(!show)}>
                    <span>{category}</span>
                    {show? <i className="icon icon-minus fa fa-minus"></i> : <i className="icon icon-plus fa fa-plus"></i>}
                </div>
                {show && <div className="card-body p-2">
                    <div className="list-group">
                        <a href="/" className="list-group-item list-group-item-action border-0">
                            <i className="fa fa-angle-right"></i>Lady bags
                        </a>
                    </div>
                    <div className="list-group">
                        <a href="/" className="list-group-item list-group-item-action border-0">
                            <i className="fa fa-angle-right"></i>Lady bags
                        </a>
                    </div>
                </div>}
            </div>
        </>

    )
}
export default MyCate;