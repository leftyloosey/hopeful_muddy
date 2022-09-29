import pigeon from '../assets/pigeon.ico'
import { AUTH_TOKEN } from '../constants';
import { Link, useNavigate } from 'react-router-dom';


export default function Header() {
    const navigate = useNavigate();
    const authToken = localStorage.getItem(AUTH_TOKEN);

    const style ={height:'2rem', width:'2rem'}
    return (
        <nav className='navbar bg-light mb-4 p-0'>
            <div className='container'>
                <a className='navbar-brand' href='/'>
                  <div className='d-flex'>
                    <img src={pigeon} style={style} alt='logo' className='mr-2' />
                    <div>set lists</div>
                  </div>
                </a>
                <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1">Hacker News</div>
        </Link>           
        <Link to="/" className="ml1 no-underline black">
          new
        </Link>
        <div className="ml1">|</div>
        <Link
          to="/search"
          className="ml1 no-underline black"
        >
          search
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/create"
              className="ml1 no-underline black"
            >
              submit
            </Link>
          </div>
        )}
      </div>
      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            logout
          </div>
        ) : (
          <Link
            to="/login"
            className="ml1 no-underline black"
          >
            login
          </Link>
        )}
      </div>
    </div>
            </div>
        </nav>
    )
}