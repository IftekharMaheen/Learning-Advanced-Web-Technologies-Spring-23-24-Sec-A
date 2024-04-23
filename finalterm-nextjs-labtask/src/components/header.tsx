import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/image/logo.png';

const Header = () => {
  return (
    <header>
      <nav>
        <Image src={Logo} alt="Logo" width={50} height={50} />
        <ul>
          <li>
            <Link href="/new">
              New
            </Link>
          </li>
          <li>
            <Link href="/update">
              Update
            </Link>
          </li>
          <li>
            <Link href="/delete">
              Delete
            </Link>
          </li>``
          <li>
            <Link href="/search">
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;