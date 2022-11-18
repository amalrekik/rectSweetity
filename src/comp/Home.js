import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    
 const navigate = useNavigate();

    return (
        <div style={{ marginTop: '80px', backgroundImage:'url(/image/baklava.png)' }} className='arriereplan' >
            <div className='flex-containerr' >
                <div>
                <img src="./image/CAFE.jpg" alt='CAFE'  className='image'/>
                    </div>
                <div style={{ paddingTop: '120px' }}>

                    <button
                     onClick={() => navigate('/boutique')}
                        style={{ width: '20vw', paddingLeft: '0px' }} className='pink'><a href='' style={{ textDecoration: 'none', paddingLeft: '15vw', paddingRight: '15vw', paddingTop: '20px', paddingBottom: '20px' }}>Boutique</a></button><br />
                    <a> </a><br />
                    <button
                        onClick={() => navigate('/healthy')}
                        style={{ width: '20vw', paddingLeft: '0px' }} className='green'><a href='' style={{ textDecoration: 'none', paddingLeft: '15vw', paddingRight: '16vw', paddingTop: '20px', paddingBottom: '20px' }}>Healthy</a></button>
                </div>

            </div>
        </div>

    )
}
