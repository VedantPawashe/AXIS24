import Header from '../components/Header'
import hero from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div>
        <Header/>
        <div className="flex">
            <div className="w-[800px]">
                <img src={hero} className='w-full' />
            </div>
            <div className='m-24 mt-12'>
                <span className="text-9xl font-bold"><span className='text-5xl text-white'>THE</span><br /><span className='stroke-text'>TECHNO</span><br /><span className='text-orange-600 pl-52'>TROVE</span></span><br /><br /><br />
                <span className='text-bold text-white text-4xl m-20'>Empowering people with AI</span>
            </div>
        </div>

        
    </div>
  )
}

export default Hero