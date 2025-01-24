import { useNavigate } from 'react-router-dom'
import './Try.css'
interface TicketCardProps {
    cardName: string;
    nameTicket: string;
    price: string;
    positions1: string;
    positions2: string;
    positions3: string;
    positions4: string;
    positions5: string;
}

export const PlanCard = ({cardName,nameTicket,price,positions1,positions2,positions3,positions4,positions5}: PlanCardProps) => {
    const navigate = useNavigate()
    return (
        <div className={cardName}>
            <div className='name-card apple-24'>{nameTicket}</div>
            <div className='price-card apple-36'>{price}</div>
                <div className='text-card-container chancery-18'>{positions1}</div>
                <div className='text-card-container chancery-18'>{positions2}</div>
                <div className='text-card-container chancery-18'>{positions3}</div>
                <div className='text-card-container chancery-18'>{positions4}</div>
                <div className='text-card-container chancery-18'>{positions5}</div>
            <div className='explore-container'>
                <div className='button-explore' onClick={()=> navigate('/about')}>Buy</div>
            </div>
        </div>
    )
}
function Price() {
    return (
        <div>
            <div className='title-container'>
                <div className='apple-48'>Tariff Plan</div>
            </div>           
            <div className='card-container'>
                <PlanCard cardName='card-monthly' nameTicket='Month Diet Plan' price='$ 199' positions1='&#10004; 1-month detailed nutrition plan' positions2='&#10004; 5 meals per day'  positions3='&#10004; energy value and nutrition included' positions4='&#10060; 50+ options avaliable' positions5='&#10060; fitness app compatible'/>    
                <PlanCard cardName='card-3months' nameTicket='3 Month Diet Plan' price='$ 499' positions1='&#10004; 3-month detailed nutrition plan' positions2='&#10004; 5 meals per day'  positions3='&#10004; energy value and nutrition included' positions4='&#10004; 50+ options avaliable' positions5='&#10060; fitness app compatible'/>
                <PlanCard cardName='card-annual' nameTicket='Annual Diet Plan' price='$ 1599' positions1='&#10004; 12-month detailed nutrition plan' positions2='&#10004; 5 meals per day'  positions3='&#10004; energy value and nutrition included' positions4='&#10004; 50+ options avaliable' positions5='&#10004; fitness app compatible'/>
            </div>
        </div>       
    )
}
export default Price;