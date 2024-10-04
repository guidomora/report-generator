'use client'

import { useState } from "react";
import SectionInput from "./SectionInput";
import { IoTrashOutline } from "react-icons/io5";

const AddSections = () => {
    // Estado que manejará la cantidad de secciones
    const [sections, setSections] = useState<number[]>([0]);

    // Función para agregar una nueva sección
    const handleAddSection = () => {
        // Se agrega un nuevo identificador (índice) para la nueva sección
        setSections([...sections, sections.length]);
    };

    const deleteSection = (sectionId:number) => {
        const removingSection = sections.filter(section => section !== sectionId)
        setSections(removingSection)
        console.log(sections);
        
    }
    return (
        <div>
            {/* Renderizar dinámicamente todas las secciones */}
            {sections.map((sectionId) => (
                <div className="flex" key={sectionId}>
                    <SectionInput key={sectionId} />
                    <div className="w-full pt-3">
                        <button
                            onClick={()=>deleteSection(sectionId)}
                            className="border border-red-600 rounded-md size-8 flex justify-center items-center hover:bg-red-100">
                            <IoTrashOutline size={"1.3rem"} className="text-red-600" />
                        </button>
                    </div>
                </div>
            ))}

            {/* Botón para agregar nueva sección */}
            <button
                onClick={handleAddSection}
                className='px-4 p h-8 bg-blue-600 text-white rounded-xl mt-6'
            >
                Agregar nueva sección
            </button>
        </div>
    )
}

export default AddSections