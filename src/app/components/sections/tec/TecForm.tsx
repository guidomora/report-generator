import React from 'react'

const TecForm = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <hr className='mt-8' />
            <span className="font-bold">Parte del técnico</span>
            <input type='file' multiple placeholder='imágenes' className='mt-2' />
        </div>
    )
}

export default TecForm