import React from 'react';
import "../../../assets/styles/forBusiness.scss";
import CloseIcon from '@mui/icons-material/Close';
import ProductList from './ProductList';
import ModalCard from './ModalCard';

const ForBusiness = () => {

    return (
        <>
            <div className="forBusiness_container">
                <div className="modal_head">
                    <h2 className='modal_heading'>For Business</h2>
                    <div className="close_btn"><CloseIcon /></div>
                </div>

                <ModalCard
                    cardTitle="Visit More Linkedin Products"
                    cardContent={<ProductList />}
                />

            </div>
        </>
    )
}

export default ForBusiness
