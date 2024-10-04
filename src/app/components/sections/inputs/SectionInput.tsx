

const SectionInput = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex flex-col w-[70%]'>
                <span className="underline mt-2">Título de la sección</span>
                <input className='mt-2 border border-gray-300 focus:border-blue-500 focus:outline-none rounded-md' type="text" placeholder='titulo' />
            </div>
            <div className='flex-col'>
                <span className="underline">Seleccione las imágenes</span>
                <input type='file' multiple placeholder='imágenes' className='mt-2' />
            </div>
            <hr className='mt-8' />
        </div>
    )
}

export default SectionInput