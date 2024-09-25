import React from 'react';

const Categories = () => {
    // Apartado de categorias para poder filtrar y buscar juegos.
    // Es necesario agregarle el comportamiento a los filtros
    return(
        <div className="my-4 mx-auto bg-white w-full max-w-2xl flex items-center justify-around rounded-full">
            <ul className='flex items-center justify-center space-x-4'>
                <li className=''>
                    <p>Categorías</p>
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
                    <p>Calificación</p>
                </li>
            </ul>
            <input type="search"
                placeholder='search for game...'
                className='pl-5 rounded-full' 
            />
        </div>
    );
};

export default Categories;