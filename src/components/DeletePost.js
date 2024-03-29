import axios from 'axios';
import { Link } from 'react-router-dom';

function DeletePost({id}) {

    const postId = id;

    const confirmDelete = () => {
            axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => {
                alert(`Deleted post with ID ${postId}`);

            })
            .catch(error => {
                console.error(error);
            })
        };

    return (
        <div>
            <p>Etes-vous sur de vouloir supprimer ce post :</p>
            <p>POST</p>
            <Link to='/'>
                <button onClick={confirmDelete} className='button'>OUI</button>
            </Link>
            <Link to='/'>
                <button className='button'>NON</button>
            </Link>
        </div>
    )
}
export default DeletePost