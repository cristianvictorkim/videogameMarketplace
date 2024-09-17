import React from 'react';


const Categories = () => {
    return(
        <div className="my-3 mx-[42rem] bg-[white] ">
            <ul className='flex items-center justify-center space-x-4'>
                <li className=''>
                    <p>Categorias</p>
                </li>
                <li className=''>
                    <p>Precio</p>
                </li>
                <li className=''>
                    <p>OS</p>
                </li>
                <li className=''>
                    <p>Idioma</p>
                </li>
                <li className=''>
                    <p>Jugadores</p>
                </li>
                <li className=''>
                    <p>Calificacion</p>
                </li>
                <li className=''>
                    <p>Search</p>
                </li>
            </ul>
        </div>
    );
};

export default Categories;
