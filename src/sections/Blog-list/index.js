import React from "react";
import Link from "next/link";

import { IoIosArrowRoundForward } from "react-icons/io";

import { Container, Row, Col } from "reusecore/Layout";
import PageHeader from "reusecore/PageHeader";
import Sidebar from "sections/Blog-sidebar";

import blogThumb1 from "assets/images/blog/post/blog-post-1.png";
import blogThumb2 from "assets/images/blog/post/blog-post-2.png";
import blogThumb3 from "assets/images/blog/post/blog-post-3.png";

import { BlogPageWrapper } from "./blogList.style";

const BlogList = (props) => {
  return (
    <BlogPageWrapper>
      <PageHeader title={props.title} />
      <div className="blog-list-wrapper">
        <Container>
          <Row>
            <Col sm={12} md={8}>
              <Row>
                <Col xs={12}>
                  <div className="post-block list">
                    <div className="post-thumb-block">
                      <img src={blogThumb1} alt="prime blog page" />
                      <div className="post-meta">
                        <span>
                          <em> 15 </em> SEP
                        </span>
                      </div>
                    </div>
                    <h2 className="post-title">
                      <Link href="/blog-single">
                        <a>It is a long established fact that</a>
                      </Link>
                    </h2>
                    <p className="post-entry">
                      Readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable
                      English. Many desktop publishing packages and web page
                      editors now use
                    </p>

                    <Link href="/blog-single">
                      <a className="readmore-btn">
                        see more <IoIosArrowRoundForward />
                      </a>
                    </Link>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="post-block list">
                    <div className="post-thumb-block">
                      <img src={blogThumb2} alt="prime blog page" />
                      <div className="post-meta">
                        <span>
                          <em> 15 </em> SEP
                        </span>
                      </div>
                    </div>
                    <h2 className="post-title">
                      <Link href="/blog-single">
                        <a>It is a long established fact that</a>
                      </Link>
                    </h2>
                    <p className="post-entry">
                      Readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable
                      English. Many desktop publishing packages and web page
                      editors now use
                    </p>

                    <Link href="/blog-single">
                      <a className="readmore-btn">
                        see more <IoIosArrowRoundForward />
                      </a>
                    </Link>
                  </div>
                </Col>
                <Col xs={12}>
                  <div className="post-block list">
                    <div className="post-thumb-block">
                      <img src={blogThumb3} alt="prime blog page" />
                      <div className="post-meta">
                        <span>
                          <em> 15 </em> SEP
                        </span>
                      </div>
                    </div>
                    <h2 className="post-title">
                      <Link href="/blog-single">
                        <a>It is a long established fact that</a>
                      </Link>
                    </h2>
                    <p className="post-entry">
                      Readable content of a page when looking at its layout. The
                      point of using Lorem Ipsum is that it has a more-or-less
                      normal distribution of letters, as opposed to using
                      'Content here, content here', making it look like readable
                      English. Many desktop publishing packages and web page
                      editors now use
                    </p>

                    <Link href="/blog-single">
                      <a className="readmore-btn">
                        see more <IoIosArrowRoundForward />
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col sm={12} md={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </BlogPageWrapper>
  );
};

export default BlogList;
