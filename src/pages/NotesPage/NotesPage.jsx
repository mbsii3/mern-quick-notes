
import { checkToken } from "../../utilities/users-service";


export default function NotesPage() {


async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
}

    return (
    <>
        <h1>NotesPage</h1>
        <h3>No Notes Yet!</h3>
        
        <button onClick={ handleCheckToken }>Check When My Login Expires</button>
    </>
    );
}