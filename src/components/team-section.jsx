const TeamSection = () => {
  return (
    <section
      id="team_section"
      className="container_fluid team_section section_bg_white"
    >
      <div className="container">
        <div className="top_item">
          <button className="btn-outline mb-20">Our Team</button>
          <h3 className="mb-20 h3-heading">Our Creative Team</h3>
          <p className="paragraph text-center mb-20">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div className="bottom_item">
          <div className="team_card">
            <img src="./assets/images/team/team-1.jpg" alt />
            <div className="card_content">
              <h4 className="team_name">Jeffery Riley</h4>
              <p className="team_role">Art Director</p>
            </div>
          </div>
          <div className="team_card">
            <img src="./assets/images/team/team-2.jpg" alt />
            <div className="card_content">
              <h4 className="team_name">Jeffery Riley</h4>
              <p className="team_role">Art Director</p>
            </div>
          </div>
          <div className="team_card">
            <img src="./assets/images/team/team-3.jpg" alt />
            <div className="card_content">
              <h4 className="team_name">Jeffery Riley</h4>
              <p className="team_role">Art Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TeamSection;