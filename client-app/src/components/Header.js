import pigeon from '../assets/pigeon.ico'

export default function Header() {
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
            </div>
        </nav>
    )
}