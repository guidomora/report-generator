import AddSections from "./inputs/AddSections";
import TecForm from "./tec/TecForm";

const AllSections = () => {


    //   TODO: dividir en componentes para el ssr 
    return (
        <div className='ml-8 mb-6 mt-28 w-[30vw]'>
            <div className='mb-4'>
                <h3 className='font-bold'>Ingrese el título del informe</h3>
                <input
                    className='mt-2 border border-gray-300 focus:border-blue-500 focus:outline-none rounded-md'
                    type='text'
                    placeholder='titulo'
                />
                <hr className='mt-8' />
            </div>
            <div>
                <span className='font-bold'>Secciones</span>
                <AddSections />
            </div>
            <div className="w-full">
                <TecForm />
            </div>
        </div>
    );
};

export default AllSections;
