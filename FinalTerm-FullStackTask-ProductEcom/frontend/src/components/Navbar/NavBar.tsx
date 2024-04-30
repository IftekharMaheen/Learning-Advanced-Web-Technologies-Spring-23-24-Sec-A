import Link from 'next/link';
import Logo from '../../../public/images/logo.jpg';
import Image from 'next/image';

const NavBar = () => 
    {
        return (
            <div className="nav">
            
            <div className="nav-logo">
                <Link href='/'><Image src={Logo} alt="logo" width={50} height={50} className='logo' /> </Link>
            </div>
           
           <div className="nav-linker">
            <ul>
                <li className="nav-links"><Link href='./register'>Register</Link> </li>
                <li className="nav-links"><Link href='./login'>Login</Link></li>
            </ul>
            </div>
            

            </div>
        )
    }

    export default NavBar;