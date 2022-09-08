import TopItem from "./top-item";

const ClientLogoSec = () => {
  return (
    <section className="client-logo">
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
          <div className="client-sec">
            <div className="client-1">
              <div>
                <img src="./assets/images/client-logo/graygrids.svg" alt />
              </div>
              <div>
                <img src="./assets/images/client-logo/uideck.svg" alt />
              </div>
              <div>
                <img src="./assets/images/client-logo/ayroui.svg" alt />
              </div>
            </div>
            <div className="client-1">
              <div>
                <img src="./assets/images/client-logo/lineicons.svg" alt />
              </div>
              <div>
                <img
                  src="./assets/images/client-logo/tailwindtemplates.svg"
                  alt
                />
              </div>
              <div>
                <img src="./assets/images/client-logo/ecomhtml.svg" alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ClientLogoSec;