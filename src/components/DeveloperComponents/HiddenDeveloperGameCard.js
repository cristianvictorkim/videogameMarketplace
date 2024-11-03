import React from 'react';
import placeholder from 'assets/Misc/placeholder-image.jpg';


const DeveloperGameCard = () => {

    return (
        <div className="flex justify-center space-x-5">
            <div className="bg-main-color rounded-lg max-w-2xl border-2 border-black w-[45rem]">
                <div className="h-[14rem] w-full flex">
                    <div className="w-[45%] h-full flex">
                        <img 
                            src={placeholder} 
                            alt="Placeholder" 
                            className="object-cover w-full rounded-lg" 
                        />
                    </div>
                    <div className="w-[55%] relative">
                        <div className="flex flex-col space-y-2 p-4">
                            <h2 className="text-lg font-bold text-[26px]">
                                Title
                            </h2>
                            <span className="text-[16px]">
                                $Price
                            </span>
                            <p>Description</p>
                            <p>Release Date</p>
                            <p>Genre</p>
                        </div>
                        <div className="absolute bottom-4 inset-x-0 flex justify-center space-x-2">
                            <p>Edit</p>
                            <p>Show</p>
                            <p>Delete</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-main-color h-[14rem] p-4 rounded-lg border-2 border-black">
                <h1 className="font-bold">
                    Stats for nerds
                </h1>
                <div className="h-full flex flex-col space-y-2">
                    <p>Views:</p>
                    <p>Sales:</p>
                    <p>Wishlisted:</p>
                    <p>Views Confirmation Rate:</p>
                </div>
            </div>
        </div>
    );
};

export default DeveloperGameCard;