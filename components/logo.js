import Link from 'next/link';

function Logo() {
  return (

    <div className={'logo'}
        ><Link href="/">
          <a>Грузовой <span>URAL</span></a>
        </Link>

    </div>

  );
};

export default Logo;
