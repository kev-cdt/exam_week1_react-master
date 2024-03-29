import { useParams } from "react-router-dom";
import EditPost from "../components/EditPost"

function EditBlogPost() {
    const { id } = useParams();

    return (
        <EditPost id={id}/>
    )
}
export default EditBlogPost