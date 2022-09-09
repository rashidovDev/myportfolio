import {BsInstagram} from 'react-icons/bs';
import {RiTelegramLine} from 'react-icons/ri';
import {FaGithub} from 'react-icons/fa';
import {AiOutlineLinkedin} from 'react-icons/ai';

const Footer = () => {
    return ( 
        <>
         <div className="footer">
             <div className='footer' style={{fontSize:"25px",marginBottom:"10px"}}>
             <a href='http://instagram.com/realist_dev'><BsInstagram /> </a> 
             <a href='http://t.me/anvar_rashidov'><RiTelegramLine/> </a> 
             <a href='http://github.com/rashidovDev'><FaGithub /> </a> 
             <a href='https://www.linkedin.com/in/anvar-rashidov-b6255b232'><AiOutlineLinkedin/> </a> 
             </div>
             <footer>&copy;Copyright Anvar Rashidov 2022</footer>
         </div>
         
        </>
     );
}
 
export default Footer;