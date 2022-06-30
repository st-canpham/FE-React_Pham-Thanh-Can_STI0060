const Policy = ({title, content, icon}: any) => {
  return (
    <li className="offer-item">
      <div className="media media-sm">
        <span className="media-img offer-icon">
          <img src={icon}/>
        </span>
        <div className="media-body">
          <h4 className="media-title">{title}</h4>
          <p className="media-content">{content}</p>
        </div>
      </div>
    </li>
  )
};
export default Policy;