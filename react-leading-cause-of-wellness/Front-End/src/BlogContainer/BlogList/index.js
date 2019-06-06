import React from "react";

const Blogs = (props) => {

    const blogList = props.blogs.map((blog) => {
        return (
            <li key={blog._id}>
                <span>{blog.email}</span>
                <span>{blog.title}</span>
                <button onClick={props.showModal.bind(null, blog)}>Show</button>
            </li>
        )
    })

    return (
        <ul>
            {blogList}
        </ul>
    )
}

export default Blogs;