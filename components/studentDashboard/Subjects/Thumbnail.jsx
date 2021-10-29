import { LightBulbIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(({ source, text1, text2}) => {
    return (
    <div className="sm:p-2 pr-6 group cursor-pointer transition duration-200 rounded-xl ease-in transform sm:hover:scale-105 hover:z-50">
            <img
               src={source}
            //    layout='responsive'
            //    height={1080}
            //    width={1920}
               loading="eager"
               style={{height : "250px", width:"1920px"}}
               className="rounded-lg "
            />

            <div className='sm:p-2'>
                <p className="truncate max-w-md">{text1}</p>

                <h2 className="mt-1 text-2xl text-white transition-all 
                duration-100 ease-in-out group-hover:font-bold">
                    {text1}
                </h2>


                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {text2}
                   
                    < LightBulbIcon className="h-5 mx-2" />
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
