import Offer from './Offer';

const OfferList = ({data} :any) => {
  return (
    <ul className="offers-list">
      {data.map((item: any) => (
        <li key={item.id} className="offer-item">
          <Offer 
            title={item.title}
            desc={item.desc}
            icon={item.icon}
          />
        </li>
      ))}
    </ul>
  )
}

export default OfferList;
