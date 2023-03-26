
const DashboardSideItems = ({ icon, title }) => {

    return (
        <>
            <div className='block bg-transparent py-0'>
                <div className=' text-white hover:text-black'
                >
                    <div className='flex items-center content-center justify-start gap-2 h-12 bg-black rounded-3xl w-72 mx-auto'>
                        <img src={icon} alt="" className='ml-6' />
                        <span className='font-semibold text-white text-xl'>{title}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardSideItems