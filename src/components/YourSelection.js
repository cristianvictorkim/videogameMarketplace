import React from 'react';

const YourSelection = ({GameCard}) => { 
    // Esto de alguna manera debera solicitar o recibir informacion acerca de
    // los juegos para poder mostrar las game cards necesarias. 
       return (
        <div className="flex justify-center my-8">
            <div className="">
                <h2 className="text-2xl font-bold">
                    Your Selection
                </h2>
            </div>
        </div>
    );
};

export default YourSelection;