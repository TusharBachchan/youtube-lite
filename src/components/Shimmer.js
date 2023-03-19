const Shimmer = () => {
   
    
    return <div className="flex flex-wrap gap-x-2 gap-y-4 mt-32">
            {Array(50).fill('').map(() => 
                <div>
            <div className="w-80 h-40 border bg-gray-200 rounded-2xl"></div>
            <div className="w-80 h-10 border mt-1 bg-gray-200 rounded-2xl"></div>
            <div className="w-20 h-5 border mt-1 bg-gray-200 rounded-2xl"></div>
                </div>
            )}
        </div>
   
        
   
}
export default Shimmer;