import { Link, useLocation } from 'react-router-dom';
import { Path } from 'shared';
import './header.scss';

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <header>
      <nav>
        <Link
          to={Path.REQUESTS}
          className={pathname === Path.REQUESTS ? 'activeLink' : ''}
        >
          Список заявок
        </Link>
        <Link
          to={Path.NEW}
          className={pathname === Path.NEW ? 'activeLink' : ''}
        >
          Создать заявку
        </Link>
      </nav>
    </header>
  );
};
