import React, { Component } from "react"
import { Col } from "reactstrap"

class BlogBox extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.blogs.map((blog, key) => (
          <Col key={key} lg={4}>
            <div className="blog-box margin-t-30 hover-effect">
              <img src={blog.image} className="img-fluid" alt="blog" />
              <div>
                <h5 className="mt-4 text-muted">{blog.category}</h5>
                <h4 className="mt-3">
                  <a href="#" className="blog-title">
                    {" "}
                    {blog.title}{" "}
                  </a>
                </h4>
                <p className="text-muted">{blog.desc}</p>
                <div className="mt-3">
                  <a href="#" className="read-btn">
                    Read More <i className="mdi mdi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </React.Fragment>
    )
  }
}

export default BlogBox
