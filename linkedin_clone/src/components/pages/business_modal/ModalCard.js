import React from 'react'
import "../../../assets/styles/forBusiness.scss"

const ModalCard = (props) => {
    const { cardTitle, cardContent } = props;
    return (
        <>
            <div className="modal_body">
                <div className="modal_card">
                    <div className="card_title">
                        <h3>{cardTitle}</h3>
                    </div>
                    <div className="card_container">
                        {cardContent}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCard
