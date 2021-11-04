
import Details from "./Details"

function People() {
    return (
        <div className="flex px-2 py-4 flex-col items-center">
            <div className="w-full sm:w-3/4 ">
                <div className=" text-4xl w-full border-b border-black py-3"><h1>Teacher</h1></div> 
                
                <Details />

                <div className="mt-10 text-4xl w-full flex justify-between border-b border-black py-3">
                    <h1>Classmates</h1>

                    <h1 className="text-lg text-gray-500">77 students</h1>
                </div> 

                <Details />
                <Details />
                <Details />
                <Details />
                <Details />
                <Details />
                <Details />
                <Details />
                <Details />
                <Details />
                
            </div>



        </div>
    )
}

export default People
