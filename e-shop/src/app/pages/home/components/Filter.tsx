import React, { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import ICategory from '../../../shared/interfaces/category-interface';

interface Props {
  categories: ICategory[];
  setChecked: any;
  checked: any;
};

const Filter: React.FC<Props> = ({ categories, setChecked, checked }) => {
  const QUERY_PARAMATER = 'QueryParameter';
  const [currentQueryParameters, setSearchParams] = useSearchParams();
	const newQueryParameters : URLSearchParams = new URLSearchParams();
  const location = useLocation();
  useEffect(() => {
    if (currentQueryParameters.get(QUERY_PARAMATER)) {
      setChecked(currentQueryParameters.get(QUERY_PARAMATER)?.split(','));
    }
  }, []);

  const handleChange = (e: any) => {
    const value = e.target.value;
    const checkedNew = [...checked];
    const index = checkedNew.findIndex(item => item === value);
    if(index !== -1) {
      checkedNew.splice(index, 1);
    } else {
      checkedNew.push(value);
    }
    if(checkedNew.length === 0) {
      currentQueryParameters.delete(QUERY_PARAMATER);
      setSearchParams(currentQueryParameters);
    }
    setChecked(checkedNew);
    newQueryParameters.set(QUERY_PARAMATER, checkedNew.join(','));
    setSearchParams(newQueryParameters);
  };

  return (
    <form>
      {categories.map((category) => (
        <div key={category.id} className="form-group">
          <input 
            type="checkbox" 
            checked = {checked.includes(category.id.toString())}
            id={`${category.id}`} 
            value={category.id}
            onChange={handleChange}/>
          <label htmlFor={`${category.id}`}>{category.name}</label>
        </div>
      ))}
    </form>
  )
};

export default Filter;
