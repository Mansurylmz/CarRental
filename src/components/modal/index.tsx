import React, { FC } from 'react'
import { Car } from '../types'
import İmages from "./images"
import formatData from '../../utils/formatData'

interface Props{
    car:Car,
    isOpen:boolean,
    close:()=>void
}

const Modal:FC<Props> = ({car,isOpen,close}) => {
  return (
    isOpen && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-[2px] grid place-items-center z-20'>
            <div className='bg-white p-6 relative max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto'>
                <button className='cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full' onClick={close}>
                    <img src="/close.svg" alt="" />
                </button>
                <İmages car={car}/>
                {formatData(car).map(([key,value])=>(
                    <p className='flex justify-between gap-20'>
                        <span className='capitalize'>{key}</span>
                        <span className='font-semibold capitalize' >{value ==="Y" ? "Var" : value==="N" ? "Yok" : value || "-"}</span>
                    </p>
                ))}
            </div>
        </div>
    )
  )
}

export default Modal