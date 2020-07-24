import React, { Component } from 'react'
import Post from './post'
import { Consumer } from './context'


class Posts extends Component {

    render() {
        return (
            <Consumer>
                {value => (
                    <div id='posts'>
                        <center><span style={{ fontSize: "28px" }} className="badge badge-warning my-5 mt-3" >enjoye Posts</span></center>
                        {value.posts.map(post => <Post key={post.id} data={post}/>)}
                    </div>
                )
                }
            </Consumer>
        )
    }
}

export default Posts