import Post from "../components/Post"
import { useParams } from "react-router-dom";

function BlogPost() {
    const { id } = useParams();

    return (
        <Post id={id}/>
    )
}
export default BlogPost