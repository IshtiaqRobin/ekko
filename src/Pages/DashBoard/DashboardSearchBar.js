import search from '../../assets/search_icon.png';

const DashboardSearchBar = ({ title }) => {

    return (
        <>
            <div className=''>
                <div className=' text-white hover:text-black'
                >
                    <div className='flex items-center gap-2 h-12 bg-black rounded-3xl lg:w-96 sm:w-72 mx-auto'>
                        <img src={search} alt="" className='ml-2' />
                        <span className='text-[#F2FF93] text-sm font-semibold mb-1'>{title}</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardSearchBar;