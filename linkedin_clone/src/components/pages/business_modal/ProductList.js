import React from 'react'
import LinkedinProduct from './LinkedinProduct';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import InsightsIcon from '@mui/icons-material/Insights';
import "../../../assets/styles/forBusiness.scss"
const ProductList = () => {
    return (
        <>
            <ul className='product_list'>
                <LinkedinProduct productLogo={<SmartDisplayIcon style={{ fontSize: '32px' }} />} productTitle="Learning" />
                <LinkedinProduct productLogo={<InsightsIcon style={{ fontSize: '32px' }} />} productTitle="Insights" />
                <LinkedinProduct productLogo={<AssignmentIcon style={{ fontSize: '32px' }} />} productTitle="Post a job" />
                <LinkedinProduct productLogo={<CrisisAlertIcon style={{ fontSize: '32px' }} />} productTitle="Advertise" />
                <LinkedinProduct productLogo={<ExploreIcon style={{ fontSize: '32px' }} />} productTitle="Sell" />
                <LinkedinProduct productLogo={<GroupsIcon style={{ fontSize: '32px' }} />} productTitle="Groups" />
                <LinkedinProduct productLogo={<LocalGroceryStoreIcon style={{ fontSize: '32px' }} />} productTitle="Service Marketplace" />
            </ul>
        </>
    )
}

export default ProductList
