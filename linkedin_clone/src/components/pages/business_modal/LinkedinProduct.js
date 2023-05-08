import React from 'react'
import "../../../assets/styles/forBusiness.scss"
const LinkedinProduct = (props) => {
    const { productLogo, productTitle } = props
    return (
        <>
            <li className='list_item'>
                <a href="#">
                    <div className="product_logo">
                        <div className="logo_icon">{productLogo}</div>
                    </div>
                    <div className="product_title">{productTitle}</div>
                </a>
            </li>
        </>
    )
}

export default LinkedinProduct
