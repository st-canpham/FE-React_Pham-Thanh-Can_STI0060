interface offer {
  title: string,
  desc: string,
  icon: string
}

const Offer: React.FC<offer> = ({title, desc, icon}) => {
  return (
    <div className="media media-sm">
        <span className="media-img offer-icon">
          <img src={icon}/>
        </span>
        <div className="media-body">
          <h4 className="media-title">{title}</h4>
          <p className="media-content">{desc}</p>
        </div>
      </div>
  )
};

export default Offer;
