import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom'
import {FaCartArrowDown} from 'react-icons/fa';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div className='sticky'>
            <div className='flex-container'>
                <div className='logo'>
                    <img src="./image/R.png" alt='LOGO' width="60px" />
                </div>
                <div className='siteName'>
                    <div style={{ color: 'rgb(70, 42, 12)', textDecoration: 'none' }}>
                        SweeT
                        <a style={{ color: 'rgb(113, 178, 48)' }}>i</a>
                        <a style={{ color: 'rgb(70, 42, 12)' }}>t</a>
                        <a style={{ color: 'rgb(233, 16, 67)' }}>y</a>
                    </div>
                    
                </div>
                <div className='Helthy'>
                    <h6 onClick={() => navigate('/healthy')} style={{marginTop:'30px'}}><a href="">Healthy</a></h6>
                </div>
                <div className='Gour'>
                    <h6 onClick={() => navigate('/boutique')} style={{marginTop:'30px'}}><a href="" >Boutique</a></h6>
                </div>
                <div className='Achat'>
                    <button
                    onClick={() => navigate('/')}
                     style={{ border: '0', backgroundColor: 'white', marginTop:'1px', paddingTop:'7px' }}>
                        <a href="" style={{ textDecoration: 'none', fontSize: '3vw', paddingTop:'-50px' }}>&#8962;</a>
                    </button>
                </div>
            </div>
        </div>
    )
}
