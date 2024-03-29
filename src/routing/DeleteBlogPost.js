import { useParams } from "react-router-dom";
import DeletePost from "../components/DeletePost";

function DeleteBlogPost() {

    const { id } = useParams();

    return (
        <DeletePost id={id}/>
    )
}
export default DeleteBlogPost