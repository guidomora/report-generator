import Link from "next/link"

// TODO: crear un array con las opciones para mapear y crear los inputs

const formFields = [
    { label: "Título de la sección", type: "text", placeholder: "titulo", multiple: false, isFile: false },
    { label: "Salon", type: "file", placeholder: "imágenes", multiple: true, isFile: true },
    { label: "Trastienda / baño", type: "file", placeholder: "imágenes", multiple: true, isFile: true },
    { label: "Luminarias", type: "file", placeholder: "imágenes", multiple: true, isFile: true },
    { label: "Aire acondicionado", type: "file", placeholder: "imágenes", multiple: true, isFile: true },
    { label: "Filtros Aire acondicionado", type: "file", placeholder: "imágenes", multiple: true, isFile: true },
    { label: "Matafuegos", type: "file", placeholder: "imágenes", multiple: true, isFile: true },
    { label: "Tablero Eléctrico", type: "file", placeholder: "imágenes", multiple: true, isFile: true },
    { label: "Otras tareas", type: "file", placeholder: "imágenes", multiple: true, isFile: true },
    {
        label: "Materiales Utilizados",
        type: "text",
        multipleInputs: [
            { placeholder: "detalle", type: "text" },
            { placeholder: "cantidad", type: "text" },
            { placeholder: "imagenes", type: "file" },
        ],
        multiple: false,
        isFile: true,
    },
    { label: "Sugerencias de mejoras y tareas pedientes", type: "file", placeholder: "imágenes", multiple: true, isFile: true },
    { label: "Remito firmado", type: "file", placeholder: "imágenes", multiple: true, isFile: true },
];


const TodoModa = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className="my-12 flex justify-center items-baseline">
                <h1 className="mr-3 font-bold">Generar informe de Todo Moda / Isadora</h1>
                <Link href={"/"}>
                    <button className="px-4 p h-8 bg-blue-600 text-white rounded-xl mt-6">Pagina principal</button>
                </Link>
            </div>
            <div className="flex flex-col justify-around items-center h-full w-[90%]   gap-5">
                {formFields.map((field, index) => (
                    <div key={index} className="flex justify-between items-center p-6 w-[30%] border border-slate-400 rounded-xl">
                        <span className="underline text-center m-2 w-[40%]">{field.label}</span>

                        {field.multipleInputs ? (
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    {field.multipleInputs.map((input, i) => (
                                        <input
                                            key={i}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                            className="w-full mt-2 border border-gray-300 focus:border-blue-500 focus:outline-none rounded-md"
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <input
                                className="w-[60%] mt-2 border border-gray-300 focus:border-blue-500 focus:outline-none rounded-md"
                                type={field.type}
                                placeholder={field.placeholder}
                                multiple={field.multiple}
                            />
                        )}
                    </div>
                ))}
            </div>
            <button className="px-4 p h-8 bg-blue-600 text-white rounded-xl my-6">Generar Informe</button>
        </div>
    )
}

export default TodoModa