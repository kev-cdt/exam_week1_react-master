import { createBrowserRouter } from 'react-router-dom'
import HomePage from './HomePage';
import BlogPost from './BlogPost';
import DeleteBlogPost from './DeleteBlogPost'
import EditBlogPost from './EditBlogPost'
import Layout from './Layout';

export const router = createBrowserRouter([{
    path: '/',
    element: <Layout />,
    children: [
        {
            index: true,
            element: <HomePage />
        },
        {
            path: '/',
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