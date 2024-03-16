import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="flex justify-between">
        <div className="p-8 py-2 flex justify-center items-center w-48 ">
            { <img src={logo} className="w-full ml-12" /> /*<span className="text-4xl text-white">Techno <br /> Trove</span>  */}
        </div>
        <ul className="flex text-xl justify-between list-none gap-16 pr-48 py-12 cursor-pointer">
            <li><a className="hover:text-orange-600 text-white" href="">HOME</a></li>
            <li><a className="hover:text-orange-600 text-white" href="">ABOUT</a></li>
            <li><a className="hover:text-orange-600 text-white" href="">SERVICES</a></li>
            <li><a className="hover:text-orange-600 text-white" href="">CONTACT US</a> </li>
        </ul>
    </div>
  )
}

export default Header