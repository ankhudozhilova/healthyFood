import { useNavigate } from 'react-router-dom'
import './Home.css';

const photos = [
    'https://i.pinimg.com/originals/6a/2f/63/6a2f63676efc1aedab4b1e0e6df0ef15.jpg',
    'https://i.pinimg.com/736x/fd/3d/81/fd3d81c5196cc92add23af7e810b82b2.jpg',
    'https://ngradlpu.ru/documents/13969388/0/photo1675061964.jpeg/d4fe2acb-7ca9-4c10-78ed-603d63a72676?imagePreview=1'
];
const photosWithText = [
    {
        src: 'https://i.pinimg.com/originals/6a/2f/63/6a2f63676efc1aedab4b1e0e6df0ef15.jpg',
        text: 'Ingridients: salmon steak (x2); vegetable oil (0,5 soup spoons); salt, pepper, spices (to taste); lemon juice (to taste); greens and vagetables (for serving).'
    },
    {
        src: 'https://i.pinimg.com/736x/fd/3d/81/fd3d81c5196cc92add23af7e810b82b2.jpg',
        text: 'Ingridients: salmon steak; olive oil (0,5 soup spoons); salt, pepper, spices (to taste); lemon juice (to taste); greens (for serving).'
    },
    {
        src: 'https://ngradlpu.ru/documents/13969388/0/photo1675061964.jpeg/d4fe2acb-7ca9-4c10-78ed-603d63a72676?imagePreview=1',
        text: 'Ingridients: chicken fillet, lettuce, avocado, broccoli, bulgur'
    }
];

function Home() {
    const navigate = useNavigate()
    return (
        <div>
            <div className='imtext-container'>
                <img src='./src/assets/bowl.png' alt='HealthyFOOD' className='image-healthydiet' />
                <div className="text-container1">
                    <div className='apple'> HealthyFOOD - EAT and TRAIN,</div>
                    <div className='apple'>RELAX and REPEAT </div>
                </div>
            </div>

            <div className='text-container2'>
                <div className='chancery'>Welcome to the healthy eating page! </div>
                <div className='chancery'>With healtyFOOD you can: </div>
                <div className='chancery'>- Find out the CPFC of any product,</div>
                <div className='chancery'>- Get an individual selection of healthy recipes</div>
                <div className='chancery'>- Find out the composition of a specific dish!</div>
            </div>

            <div className='button-container'>
                <button className='special-button-home' onClick={() => navigate('/about')}>Try and Buy</button>
            </div>

            <div className='photo_container'>

                <div className='flex_row_bc'>
                    {photosWithText.map((item, index) => (
                        <div key={index} className='image_food'>
                            <img src={item.src} alt={`Photo ${index + 1}`} />
                            <div className='food_text'>{item.text}</div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
export default Home;