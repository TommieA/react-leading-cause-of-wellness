import React, {Component} from "react";

class EditBlog extends Component {
    constructor(props){
        super(props);
        this.state = {
            time:  "",
            email: this.props.blog.email,
            title: this.props.blog.title,
            blog:  this.props.blog.blog
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
 
            await this.setState({
                time: new Date()
            })

            this.props.editBlog(this.state, this.props.blog._id)

            this.props.hideEditBlog();
    }

    handleDelete = async (e) => {
        e.preventDefault();
        this.props.deleteBlog(this.props.blog._id)
    }

    render(){
        return(
            <div>
                <h1>Edit Blog</h1>
                <form onSubmit={this.handleSubmit}>
                <input name="email" type="text" className="head" value={this.state.email} onChange={this.handleChange}></input>
                    <br></br>
                    <input name="title" type="text" className="head" value={this.state.title} onChange={this.handleChange}></input>
                    <br></br>
                    <textarea name="blog" type="text" id="blog" value={this.state.blog} onChange={this.handleChange}></textarea>
                    <br></br>
                    <br></br>
                    <input type="submit" value="Submit"></input>
                   
                 </form>   
                 <form onSubmit={this.handleDelete}>
                    <input type="submit" value="Delete"></input>
                 </form>
            </div>
        )
    }
}



export default EditBlog;