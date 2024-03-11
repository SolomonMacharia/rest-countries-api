
import DarkMode from './DarkMode'

const header = () => {
  return (
    <>
    <div className='header'>
        <h1 className='header__title'>Where in the world?</h1>
        <p className='header__switch-mode'><DarkMode /></p>
    </div>
    <div className="header__border-line"></div>
    </>
  )
}

export default header
