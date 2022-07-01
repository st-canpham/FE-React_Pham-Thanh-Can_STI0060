import OfferList from './OfferList';
import offerData from '../../../../shared/constants/offer-data';

const Banner = () => {
  return (
    <section className="section-banner page-section">
      <div className="container">
        <div className="banner-inner">
          <div className="banner-content">
            <h2 className="banner-title">
              Sale of the
              <span className="text-primary">summer</span> collection
            </h2>
            <a href="" className="banner-link">
              <span className="btn btn-icon-primary">
                <svg
                  width="17"
                  height="14"
                  viewBox="0 0 17 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.61405 -9.53674e-07L15.7729 5.84095L17 7.00368L15.7729 8.16745L9.61405 14L8.38693 12.8446L13.6745 7.82609L0 7.82609V6.18231L13.6745 6.18231L8.38693 1.16588L9.61405 -9.53674e-07Z"
                    fill="white"
                  />
                </svg>
              </span>
              <span className="banner-link-text">SHOP NOW</span>
            </a>
          </div>
          <OfferList offerlist={offerData}/>
        </div>
      </div>
    </section>
  )
};

export default Banner;
