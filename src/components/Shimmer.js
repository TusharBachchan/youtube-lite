const Shimmer = () => {
   
    
    return <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-4 gap-4 p-2 mobile:mt-48 sm:mt-28 md:mt-36">
            {Array(100).fill('').map(() => 
                <div className="">
            <div className="w-72 h-40 border bg-gray-200 rounded-2xl"></div>
            <div className="w-72 h-10 border mt-1 bg-gray-200 rounded-2xl"></div>
            <div className="w-20 h-5 border mt-1 bg-gray-200 rounded-2xl"></div>
                </div>
            )}
        </div>
}
export default Shimmer;


