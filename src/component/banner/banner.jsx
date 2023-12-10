import BAnnerImg from '../../assets/banner.png'
import Button from '../button/button'


const Banner = () => {
    // dynamic banner using the product context
    return(
        <section className='h-1/3 border-4 border-yellow-500 grid grid-cols-2' >
           <div className=" flex flex-col gap-2 justify-center">
                <h1 className='h1'> Make your <span>Fashion</span> look mire charming</h1>
                <div className='grid grid-cols-3 gap-3'>
                    <div className='flex flex-col gap-2'>
                        <p>price</p>
                        <h1> priceNumber</h1>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p>price</p>
                        <h1> priceNumber</h1>
                    </div>
                </div>
                {/* <Button text='View details' /> */}
           </div>
           <div className=" flex justify-end items-center">
                <img src={BAnnerImg} className='h-3/4 w-2/4' alt="" />
           </div>
        </section>
    )
}

export default Banner