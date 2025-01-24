import { useState, useEffect } from 'react';
import './About.css'

const apiUrl = 'https://api.calorieninjas.com/v1/nutrition?query=';
const query = ['100g chicken', '100g onion', '1 egg', '100g beef', '100g lamb', '100g cheese', '100g milk', '100g banana', '100g pork', '100g apple'];

function About() {
    const [calories, setCalorries] = useState('');
    const [protein, setProtein] = useState('');
    const [fat, setFat] = useState('');
    const [carbo, setCarbo] = useState('');
	let index = Math.floor(Math.random() * 10);

    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setActiveQuestion(activeQuestion === index ? null : index);
    };

    useEffect(() => {
		const fetchData = async () => {
			try {
				//console.log('Make request: ' + apiUrl + query[index]);
				const response = await fetch(apiUrl+query[index], { method: 'GET', headers: {'X-Api-Key': '64AGKxvOlxPUgtY4Xojxdg==VehnyiVOu9xIwsFz'} });
				if (response.ok && response.headers.get('Content-Type') === 'application/json') {
					const obj = await response.json();
					const item = obj.items[0];
					
					//console.log(item);
					setCalorries(item.calories);
					setProtein(item.protein_g);
					setFat(item.fat_total_g);
					setCarbo(item.carbohydrates_total_g);
					//console.log(ingredients);
					//console.log(servings);
					//console.log(instructions);
				}
				else {
					console.log(Response.error());
				}
			} catch (error) {
				console.error('Error fetching recipes:', error);
			}
		};
		fetchData();
	}, []);

    const faqItems = [
        { question: "What will I get by purchasing healthyFOOD?", answer: "You ill receive an extended package of recommendations selected especially for you" },
        { question: "My payment is not going throught", answer: "Contact our support in Telegram @healthyfood_help" },
        { question: "Why healthyFOOD?", answer: "By purchasing a package of recipes you will receive a selection of CPFC specially as a gift" },
    ];

    const faqContent = (
        <div className='faq_container'>
            <div className='faq_title_container'>
                <span className='faq_title'>FAQ</span>
            </div>
            <div className='questions_block'>
                {faqItems.map((item, index) => (
                    <div key={index}>
                        <div
                            className='question_block'
                            onClick={() => toggleQuestion(index)}
                        >
                            <span>{item.question}</span>
                            <span className={`$'arrow' ${activeQuestion === index ? 'open' : ''}`}>&#9654;</span>
                        </div>
                        {activeQuestion === index && (
                            <div className='answer_block' style={{ display: 'block' }}>
                                <span>{item.answer}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
    return (
        <div>
            <div className="horizontal-container">
                <div className='text-item'>
                    <div className='apple-48'>So, who are we?</div>
                    <div className='apple-36'>We are the healthyFOOD team!</div>
                    <div className='apple-36'>
                        Our team offers you a package of everything you need to start changing your body today!
                        With HealthyFOOD, you can find out the composition of any dish,
                        get an individual selection of recipes,
                        and calculate the BMI for any product.
                        Just look how cool it looks!
                    </div>
                </div>
                <div className='text-item'>
                    <div className='apple-48'>Do You Know That</div>
                    <div className='apple-48'>{query[index]} conains:</div>
                    <div className='chancery-28'>Calories: {calories}</div>
                    <div className='chancery-28'>Protein: {protein}</div>
                    <div className='chancery-28'>Fat: {fat}</div>
                    <div className='chancery-28'>Carbohydrates: {carbo}</div>
                </div>
            </div>
            <div className='text-container'>
                {faqContent}
            </div>
        </div>
    );

 }
export default About;