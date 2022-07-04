import Offer from './Offer';
import IOffer from '../../../../shared/interfaces/offer-interface';

interface IOfferList {
  offerlist: IOffer[]
}

const OfferList = ({offerlist} :IOfferList) => {
  return (
    <ul className="offers-list">
      {offerlist.map((item: any) => (
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
