import React, {Component} from "react";
import CreateBlog from "./CreateBlog/CreateBlog";

class BlogContainer extends Component{
    constructor(){
        super()
        this.state = {
            showBlog: false,
            createBlog: false
        }
    }

    showCreateBlog = () => {
        this.setState({
            createBlog: true
        })
    }

    submitBlog = async (data) => {
        console.log("Submitting Blog")    
        console.log(data)
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
        console.log(parsedResponse);
        if(parsedResponse.status === 200){
            this.setState({
                blog: parsedResponse.data
            })
        } 
        } catch(err){
            console.log(err)
        }   
    }

    render(){
        return(
            <div>
                <h1>BlogContainer</h1>
                {
                    this.state.createBlog ?
                        <CreateBlog submitBlog={this.submitBlog}/>
                    :
                        <button onClick = {this.showCreateBlog}>Create New Blog</button>
                }
            </div>
        )
    }
}

export default BlogContainer;