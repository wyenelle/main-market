import BAnnerImg from '../../assets/banner.png'
import Button from '../button/button'


const Banner = () => {
    const sty = {
        fontVariant: 'small-caps'
    }
    // dynamic banner using the product context
    return(
        <section className='h-2/5 grid grid-cols-2 ' >
           <div className=" flex flex-col gap-2 justify-center">
                <h1 className='h1 '> Make your <span>Fashion</span> look mire charming</h1>
                <div className='grid grid-cols-3 gap-3 '>
                    <div className='flex flex-col gap-4'>
                        <p className='font-bold'>price</p>
                        <h1 className='text-2xl font-bolder '> $124</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-center font-bold'>size</p>
                        <div style={sty} className='flex' >
                            <span className="border rounded-full p-3"> S </span>
                            <span className="border rounded-full p-3"> M</span>
                            <span className="border rounded-full p-3"> L </span>
                        </div>
                    </div>
                </div>
                <div className='h-12 '>
                    <button className='h-full w-full border-none outline-none shadow-lg flex justify-center items-center mx-auto bg-black text-white rounded-full p-3'>View details</button>
                </div>
           </div>
           <div className=" flex justify-end items-center">
                <img src={BAnnerImg} className='h-5/6 w-3/4' alt="" />
           </div>
        </section>
    )
}

export default Banner