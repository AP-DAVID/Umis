import { LightBulbIcon, PencilIcon } from '@heroicons/react/solid'
import Image from 'next/image'


const Thumbnail = (({ source, title, body, text, position}) => {

    console.log(title)
    return (
    <div className="sm:p-2 ml-7 pr-6 group cursor-pointer transition duration-200 rounded-xl ease-in transform sm:hover:scale-105 hover:z-50">
            <img
               src={source}
               alt=""
               loading = "eager"
            //    style={{height : "250px", width:"720px"}}
               className="rounded-lg  w-full object-cover"
            />
        
            <div className='sm:p-2 mb-5'>
                <p className="truncate max-w-md font-bold">{title}</p>

                <h2 className="mt-1 text-md font-light break-normal text-black transition-all 
                duration-100 ease-in-out  group-hover:font-bold">
                    {body}
                </h2>


                <p className="hidden sm:inline-flex items-center opacity-0 group-hover:opacity-100">
                    {text} <br /> <br />
                    {position}
                   
                    < LightBulbIcon className="h-5 mx-2" />
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
