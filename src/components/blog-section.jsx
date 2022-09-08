import ContentBox from "./content-box";
import TopItem from "./top-item";

const BlogSection = () => {
  return (
    <section id="blog_section" className="container_fluid blog_section">
      <div className="container">
      <TopItem
          btnHeading="Latest news"
          title="Latest News & Blog"
          desc="There are many variations of passages of Lorem Ipsum available,
                    but the
                    majority have suffered
                    alteration in some form."
        />
        <div className="bottom_item">
          <ContentBox
            img="./assets/images/blog/1.jpg"
            logo="./assets/images/blognews.jpg"
            logotitle="by Tim Norton"
            title="Make your team a Design driven company"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatibus cumque iste repellat consequuntur tenetur."
          />
          <ContentBox
            img="./assets/images/blog/1.jpg"
            logo="./assets/images/blognews.jpg"
            logotitle="by Tim Norton"
            title="Make your team a Design driven company"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatibus cumque iste repellat consequuntur tenetur."
          />
         <ContentBox
            img="./assets/images/blog/1.jpg"
            logo="./assets/images/blognews.jpg"
            logotitle="by Tim Norton"
            title="Make your team a Design driven company"
            desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, voluptatibus cumque iste repellat consequuntur tenetur."
          />
        </div>
      </div>
    </section>
  );
};
export default BlogSection;
