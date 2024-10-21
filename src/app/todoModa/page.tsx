import Link from "next/link"

// TODO: crear un array con las opciones para mapear y crear los inputs


const TodoModa = () => {
    return (
        <div className='h-screen w-screen flex flex-col justify-center items-center'>
            <div className="mb-4 flex justify-center items-baseline">
                <h1 className="mr-3 font-bold">Generar informe de Todo Moda / Isadora</h1>
                <Link href={"/"}>
                    <button className="px-4 p h-8 bg-blue-600 text-white rounded-xl mt-6">Pagina principal</button>
                </Link>
            </div>

            <div className="p-6 flex justify-center  items-center flex-wrap flex-row h-[90%] w-[90%] border border-black rounded-xl">

                <div className='flex flex-col w-full justify-center items-center'>
                    <span className="underline mt-2">Título de la sección</span>
                    <input className='mt-2 border border-gray-300 focus:border-blue-500 focus:outline-none rounded-md' type="text" placeholder='titulo' />
                </div>
                <hr className='mt-4' />
                <h2>Secciones:</h2>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Salon</span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Trastienda / baño </span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Luminarias </span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Luminarias </span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Aire acondicionado </span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Filtros Aire acondicionado </span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Matafuegos </span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Tablero Eléctrico </span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Aire acondicionado </span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Otras tareas </span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Materiales Utilizados </span>
                    <div className='flex flex-row'>
                        <input className='mt-2 border border-gray-300 focus:border-blue-500 focus:outline-none rounded-md' type="text" placeholder='detale' />
                        <input className='mt-2 border border-gray-300 focus:border-blue-500 focus:outline-none rounded-md' type="text" placeholder='cantidad' />
                    </div>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Sugerencias de mejoras y tareas pedientes </span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
                <div className='flex flex-col'>
                    <span className="underline mt-2">Remito firmado </span>
                    <input type='file' multiple placeholder='imágenes' className='mt-2' />
                </div>
            </div>
            <button className="px-4 p h-8 bg-blue-600 text-white rounded-xl my-6">Generar Informe</button>
        </div>
    )
}

export default TodoModa