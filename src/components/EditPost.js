import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function EditPost({id}) {

    const [formData, setFormData] = useState({id: id, title: '', desc: ''})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
            console.log(response.data)
            setFormData(prevState => ({
                ...prevState, title: response.data.title, desc: response.data.body}));
            })
            .catch(error => {
            console.error(error);
            });
        }, []);

    const handleChange = e => {
        console.log(formData)
        const { name } = e.target;

        setFormData(prevState => ({
            ...prevState,
            [name]: e.target.value
        }));
    }

    const submitForm = e => {
        e.preventDefault();
        axios.put(`https://jsonplaceholder.typicode.com/posts/${formData.id}`, (formData))
        .then(response => {
            alert(`Update post with title ${formData.title}`);
        })
        .catch(error => {
            console.error(error);
        })
    }

    return (
        <div>
            <form>
                <div className="field">
                    <label className="label">Titre</label>
                    <div className="control">
                        <input name="title" value={formData.title} className="input" type="text" placeholder="Text input" onChange={handleChange}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Description du post</label>
                    <div className="control">
                        <textarea name="desc" value={formData.desc} className="textarea" placeholder="Description du post ..." onChange={handleChange}></textarea>
                    </div>
                </div>
                <Link to='/'>
                    <button onClick={submitForm} className='button'>Créer mon post</button>
                </Link>
            </form>
        </div>
    )
}
export default EditPost