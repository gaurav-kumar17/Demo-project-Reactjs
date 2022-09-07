const VideoSection = () => {

  return (
    <section
      id="video_intro_section"
      className="container_fluid video_intro_section section_bg_gray">
      <div className="container">
        <div className="top_item">
          <button className="btn-outline mb-20">Our Intro Video</button>
          <h3 className="mb-20 h3-heading">Watch Our Promo Video</h3>
          <p className="paragraph text-center mb-20">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="bottom_item">
          <img src="./assets/images/video/video-bg.png" alt />
          <div className="play_btn">
            <i className="fa-solid fa-play" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default VideoSection;
