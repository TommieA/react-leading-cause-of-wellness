import React, {Component} from "react";
import CreateBlog from "./CreateBlog/CreateBlog";
import BlogList from "./BlogList/BlogList.js";
import EditBlog from "./EditBlog/EditBlog.jsx";

class BlogContainer extends Component{
    constructor(){
        super()
        this.state = {
            showBlog: false,
            createBlog: false,
            blogs:[]
        }
    }

    showCreateBlog = () => {
        this.setState({
            createBlog: true
        })
    }

    getBlogs = async () => {

        try {
          const response = await fetch("http://localhost:9000/blog", {
              credentials: "include"
          })  

          if(response.status !== 200){
              throw Error(response.statusText);
          }

          const blogsParsed = await response.json();

          this.setState({blogs: blogsParsed.data});

        } catch (err){
            console.log(err)
        }        
    }

    submitBlog = async (data) => {
        try{
            const blog = await fetch("http://localhost:9000/blog", {
            method: "POST",
            body:   JSON.stringify(data),
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const parsedResponse = await blog.json();
     
        if(parsedResponse.status === 200){
            this.setState({
                blogs: [
                    ...this.state.blogs,
                    parsedResponse.data
                ],
                createBlog: false
            })
        } 
        } catch(err){
            console.log(err)
        }   
    }

    editBlog = async (data,id) => {
   
        try {
            const editResponse = await fetch("http://localhost:9000/blog/" + id, {
                method: 'PUT',
                credentials: "include",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            
            const parsedResponse = await editResponse.json();
            const editedBlogArray = this.state.blogs.map((blog) => {
                if(blog._id === id){
                    blog = parsedResponse.data;
                }
                return blog
            })
            this.setState({
                blogs: editedBlogArray,
            })
        }catch(err){
            console.log(err);
        }
    }

    deleteBlog = async (id) => {   
        try {
            const deleteBlog = await fetch("http://localhost:9000/blog/" + id, {
                method: 'DELETE'
                });
             
                const deleteBlogJson = await deleteBlog.json();
                this.setState({blogs: this.state.blogs.filter((blog, i) => blog._id !== id)});
            } 
            catch(err) {
            console.log(err)
            }
    }


    render(){
        return(
            <div>
                <h1>Leading Cause of Wellness Blogs</h1>
                
                {
                    this.state.createBlog ?
                        <CreateBlog submitBlog={this.submitBlog}/>
                    :
                        <button onClick = {this.showCreateBlog}>Create New Blog</button>
                }

                <BlogList blogList={this.state.blogs} getBlogs={this.getBlogs} editBlog={this.editBlog} deleteBlog={this.deleteBlog}/>
            </div>
        )
    }
}

export default BlogContainer;