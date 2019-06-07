import React, {Component} from "react";
import EditBlog from "../EditBlog/EditBlog.jsx"; 
import { identifier } from "@babel/types";


class BlogList extends Component {
    constructor(){
        super();
        this.state = {
            editBlog: false,
            blogIdToEdit: ""
        }
    }

    componentDidMount(){
        this.props.getBlogs();
    }

    showEditBlog = (id) => {
        this.setState({
            editBlog: true,
            blogIdToEdit: id
        })
    }

    hideEditBlog = () =>{
        this.setState({
            editBlog: false
        })
    }

    showBlog = (id) => {
        this.setState({
            showBlog: true,
            blogToShow: id
        })
    }
    
    render(){
        const blogList = this.props.blogList.map((blog) => {
            return (
                <li key={blog._id}>
                    <span id="listEmail">{blog.email}</span>
                    <span id="listTitle">{blog.title}</span>
                    {
                    this.state.editBlog && this.state.blogIdToEdit == blog._id ?
                        <EditBlog editBlog={this.props.editBlog} deleteBlog={this.props.deleteBlog} hideEditBlog={this.hideEditBlog} blog={blog}/>
                    :
                        <div>
                            <button onClick = {this.showEditBlog.bind(null, blog._id)}>Edit</button>
                            <button onClick = {this.showBlog.bind(null, blog._id)}>Show</button>
                        </div>
                    }

                </li>
            )
        })
        return (
            <ul>
                {blogList}
            </ul>
        )
    }
}


export default BlogList;