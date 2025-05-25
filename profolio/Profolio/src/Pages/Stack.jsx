import AWS from '../assets/Tech-icons/AWS.svg';
import CSS3 from '../assets/Tech-icons/CSS3.svg';
import Knex from '../assets/Tech-icons/Knex.js.svg';
import HTML5 from '../assets/Tech-icons/HTML5.svg';
import JavaScript from '../assets/Tech-icons/JavaScript.svg';
import Node from '../assets/Tech-icons/Node.js.svg';
import ReactIcon from '../assets/Tech-icons/React.svg';
import PostgresSql from '../assets/Tech-icons/PostgresSQL.svg';
import Express from '../assets/Tech-icons/Express.svg';

const icons = [
    { icon: AWS, alt: 'AWS' },
    { icon: CSS3, alt: 'CSS3' },
    { icon: Knex, alt: 'Knex' },
    { icon: HTML5, alt: 'HTML5' },
    { icon: JavaScript, alt: 'JavaScript' },
    { icon: Node, alt: 'Node.js' },
    { icon: ReactIcon, alt: 'React' },
    { icon: PostgresSql, alt: 'PostgreSQL' },
    { icon: Express, alt: 'Express' }
];

const Tech = () => {
    return (
        <div className='icons'>
            {icons.map((item, index) => (
                <div key={index}>
                    <img src={item.icon} alt={item.alt} />
                    <p>{item.alt}</p>
                </div>
            ))}
        </div>
    );
};

export default Tech;