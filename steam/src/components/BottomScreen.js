import React from 'react';

const BottomScreen = () => {
    return(
        <div className="bg-btn-color w-100%">
            <div className="py-3 flex items-center justify-center">
                <p>
                © 2024 Games Corporation. Todos los derechos reservados. Todas las marcas registradas.
                Todos los precios incluyen IVA (donde sea aplicable). 
                </p>
            </div>
            <div className="">
                <ul className='flex items-center justify-center space-x-4 py-4' >
                    <li>
                        <p>About us</p>
                    </li>
                    <li>
                        <p>Employment</p>
                    </li>
                    <li>
                        <p>Distribution</p>
                    </li>
                    <li>
                        <p>Online Support</p>
                    </li>
                    <li>
                        <p>Gift Cards</p>
                    </li>
                    <li>
                        <p>Twitter</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BottomScreen;