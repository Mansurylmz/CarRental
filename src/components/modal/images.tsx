import React, { FC } from 'react'
import { Car } from '../types'
import generateImages from '../../utils/generateImages'
interface Props{
    car:Car
}

const İmages:FC<Props> = ({car}) => {
  return (
    <div className='flex-1 flex-col gap-3'>
        <div className='w-full h-40'>
            <img src={generateImages(car,undefined,true)} alt="" className='h-full mx-auto object-cover rounded-md ' />
        </div>
        <div className='flex gap-3 my-3'>
            <div className='rounded flex-1 flex relative h-24 bg-primary-blue-100'>
                <img src={generateImages(car,"29")} alt="" className='mx-auto object-contain min-w-[140px]' />
            </div>
            <div className='rounded flex-1 flex relative h-24 bg-primary-blue-100'>
                <img src={generateImages(car,"33")} alt="" className='mx-auto object-contain min-w-[140px]' />
            </div>
            <div className='rounded flex-1 flex relative h-24 bg-primary-blue-100'>
                <img src={generateImages(car,"13")} alt="" className='mx-auto object-contain min-w-[140px]' />
            </div>
        </div>
    </div>
  )
}

export default İmages