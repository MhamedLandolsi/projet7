import PropTypes from 'prop-types'
import { useState } from 'react'
import '../../Styles/components/collapse.scss'


function Collapse({ title, children, open }) {
    const [isOpen, setOpen] = useState(open)

    return (
        <div className="collapse">
            <div className="collapse-head" onClick={() => setOpen(!isOpen)}>
                <div className="collapse-title">{title}</div>
                <div className={'collapse-icon ' + (isOpen ? 'collapse-up' : 'collapse-down')}> </div>
            </div>
            {isOpen && <div className="collapse-content" >{children}</div>}
        </div>
    )
}


Collapse.protoType = {
    title: PropTypes.string,
    open: PropTypes.bool,
}


export default Collapse