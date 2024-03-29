import { createBrowserRouter } from 'react-router-dom'
import HomePage from './HomePage';
import BlogPost from './BlogPost';
import DeleteBlogPost from './DeleteBlogPost'
import EditBlogPost from './EditBlogPost'

export const router = createBrowserRouter([{
    path: '/',
    element: <HomePage />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: 'creer',
            element: <BlogPost />
        },
        {
            path: 'edit',
            element: <EditBlogPost />
        },
        {
            path: 'delete',
            element: <DeleteBlogPost />
        },

    ]
}])