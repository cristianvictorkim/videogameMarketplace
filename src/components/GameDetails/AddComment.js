import React, { useContext, useState } from 'react';
import { UserContext } from 'components/Common/UserContext';
import { addComment } from 'Entities/Game';

const AddComment = ({ gameId, setComments }) => { // Agregar setComments aquí
    const { profile } = useContext(UserContext);
    const [tempComment, setComment] = useState("");
    const [tempScore, setTempScore] = useState("");

    const handleSubmit = () => {
        const score = parseFloat(tempScore);
    
        if (!tempComment.trim()) {
            alert("El comentario no puede estar vacío.");
            return;
        }
    
        if (isNaN(score) || score < 0 || score > 5) {
            alert("El puntaje debe ser un número entre 0 y 5.");
            return;
        }
    
        addComment(gameId, profile.username, tempComment, score);
    
        setComments(prevComments => [
            ...prevComments,
            { username: profile.username, comment: tempComment, rating: score } 
        ]);

        setComment("");
        setTempScore("");
    };

    return (
        <div>
            <h1 className='font-bold pb-1'>Add a comment</h1>
            <div className='bg-main-color p-3 rounded-lg'>
                <div className='flex justify-between'>
                    <h1 className=''>Write a review about the game</h1>
                    <div className='flex space-x-2'>
                        <p>Score:</p>
                        <input
                            type='text'
                            className='w-[1.5rem] rounded-lg text-center'
                            value={tempScore}
                            onChange={(e) => setTempScore(e.target.value)}
                        />
                    </div>
                </div>
                <div className='flex'>
                    <img
                        src={profile.profilePicture}
                        alt="User Profile"
                        className='profilePic p-4'
                    />
                    <div className='w-full p-2 bg-white mt-3 rounded'>
                        <input
                            type='text'
                            className='w-full h-full'
                            placeholder='Escribe tu comentario'
                            value={tempComment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <button className='btn mt-2' onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};

export default AddComment;
