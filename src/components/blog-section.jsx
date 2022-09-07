const BlogSection = () => {
  return (
    <section id="blog_section" className="container_fluid blog_section">
      <div className="container">
        <div className="top_item">
          <button className="btn-outline mb-20">latest news</button>
          <h3 className="mb-20 h3-heading">Latest News &amp; Blog</h3>
          <p className="paragraph text-center mb-20">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="bottom_item">
          <div className="content_box">
            <div className="img_box">
              <img src="./assets/images/blog/1.jpg" alt />
              <div className="img_box__content">
                <img src="./assets/images/blognews.jpg" alt />
                <span>by tim nortion</span>
              </div>
            </div>
            <h4>Make your team a Design driven company</h4>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              voluptatibus cumque iste repellat consequuntur tenetur.
            </p>
          </div>
          <div className="content_box">
            <div className="img_box">
              <img src="./assets/images/blog/2.jpg" alt />
              <div className="img_box__content">
                <img src="./assets/images/blognews.jpg" alt />
                <span>by tim nortion</span>
              </div>
            </div>
            <h4>Make your team a Design driven company</h4>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              voluptatibus cumque iste repellat consequuntur tenetur.
            </p>
          </div>
          <div className="content_box">
            <div className="img_box">
              <img src="./assets/images/blog/3.jpg" alt />
              <div className="img_box__content">
                <img src="./assets/images/blognews.jpg" alt />
                <span>by tim nortion</span>
              </div>
            </div>
            <h4>Make your team a Design driven company</h4>
            <p className="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
              voluptatibus cumque iste repellat consequuntur tenetur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
