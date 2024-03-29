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
            path: 'postdetails/:id',
            element: <BlogPost />
        },
        {
            path: 'edit/:id',
            element: <EditBlogPost />
        },
        {
            path: 'delete/:id',
            element: <DeleteBlogPost />
        },

    ]
}])