import React, { FC, useState } from 'react'
import { Car } from '../types'
import calcPrice from '../../utils/calPrice'
import İnfo from "../list/info"
import Button from '../button'
import { motion } from "motion/react";
import Modal from '../modal'
import generateImages from '../../utils/generateImages'

interface Props{
    car:Car
}

const Card:FC<Props> = ({car}) => {

    const [isOpen,setIsOpen]=useState<boolean>(false)
    

  return (
    <div className='car-card group'>
        <h2 className='car-card-content-title'>{car.make} {car.model}</h2>
        <div className='flex mt-6 text-[10px]'>
            <span className='font-semibold'>₺</span>
            <span className='text-[32px]'>{calcPrice(car)}</span>
            <span className='font-semibold self-end'>/gün</span>
        </div>
        <div>
            <img src={generateImages(car)} alt={car.model} className='w-full h-full object-contain min-h-[200px]' />
        </div>
        <div className='w-full transition duration-300'>
            <div className='group-hover:hidden'>
                <İnfo car={car} />
            </div>
            <motion.div initial={{scale:0.5}} whileInView={{scale:1}} className='hidden group-hover:block'>
                <Button fn={()=>setIsOpen(true)} text="Daha Fazla" designs='w-full text-white mt-[0.5px]'/>
            </motion.div>
        </div>
        <Modal car={car} isOpen={isOpen} close={()=>setIsOpen(false)} />
    </div>
  )
}

export default Card