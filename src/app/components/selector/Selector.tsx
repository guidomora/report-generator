import Image from "next/image"
import Allianz from '../../../../public/allianz-1.svg'
import TodoModa from '../../../../public/todoModa.jpg'
import Facility from '../../../../public/facility.png'

interface OptionsSelector {
    text: string;
    id: string;
    name: string;
    value: string;
    img: string;
}


const options: OptionsSelector[] = [
    { text: "Semáforos", id: "semaforo", name: "", value: "", img: "/allianz-1.svg" },
    { text: "Todo Moda", id: "todomoda", name: "", value: "", img: "/todoModa.jpg" },
    { text: "Informe Base", id: "facility", name: "", value: "", img: "/facility.png" },
]

const Selector = () => {
    return (
        <div className="mt-9 flex flex-col justify-center items-center w-full">
            <h2>Seleccione el formato del informe que desea generar</h2>
            <div className="flex justify-center items-center gap-x-12 mt-6">
                {options.map(({img, text, id}) =>
                    <div className="flex flex-col justify-center items-center" key={text}>
                        <Image className="size-[150px] p-3" width={500} height={500} src={img} alt={text} />
                        <div>
                            <input type="radio" id={id} name="opciones" value="1" />
                            <label className="cursor-pointer ml-1" htmlFor={id}>{text}</label>
                        </div>
                    </div>
                )}
            </div>
            <button className="px-4 p h-8 bg-blue-600 text-white rounded-xl mt-6">Guardar</button>
        </div>
    )
}

export default Selector