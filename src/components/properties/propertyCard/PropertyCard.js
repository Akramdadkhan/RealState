import {useNavigate} from 'react-router-dom';
import './propertyCard.css';

export default function PropertyCard({property}){

    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/detail', {state: property});
    }
    return(<div onClick={() => handleClick()} className='propertyCard'>
        <img className='propertyImg' src={property.img}></img>
        <div className='propertyText'>
            <h5>{property.name}</h5>
            <p>{property.des}</p>
        </div>
    </div>);
}