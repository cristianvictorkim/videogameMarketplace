// Array to store multiple game information instances
import emptyFoto from "../assets/pfp.png";

const today = new Date();
const userName = '';
let pfp = emptyFoto;
let userId = -1;

function getUserId()
{
    return userId;
}

// Exporting the functions and variables for use in other files
export { getUserId, /*setPfp, getPfp, getUserName, setUserName*/ };
