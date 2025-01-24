import { useNavigate } from 'react-router-dom'
import './header.css'


function Header() {   
    const navigate = useNavigate()   
    return (
    <header>
        <div className="container">
            <button  className='button-header' onClick={()=> navigate('/')}>Home</button>
            <button  className='button-header' onClick={()=> navigate('/try')}>Try</button>
            <button  className='button-header' onClick={()=> navigate('/about')}>About</button>
        </div>
    </header>
    )
}

export default Header