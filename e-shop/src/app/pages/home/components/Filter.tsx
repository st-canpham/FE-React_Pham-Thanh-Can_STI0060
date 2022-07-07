import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterProduct } from '../home.actions';
import ICategory from '../../../shared/interfaces/category-interface';

interface Props {
  categories: ICategory[];
};

const Filter: React.FC<Props> = ({ categories }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [path, setPath] = useState(location.pathname);
  const [checked, setChecked] = useState<number[]>([]);
  useEffect(() => {
    dispatch(filterProduct(checked));
  }, [checked]);

  const handleChange = (id: number) => {
    const isChecked = checked.includes(id);
    setChecked((prev) => {
      if (isChecked) {
        return checked.filter(item => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <form>
      {categories.map((category) => (
        <div key={category.id} className="form-group">
          <input 
            type="checkbox" 
            checked = {checked.includes(category.id)}
            id={`${category.id}`} 
            onChange={() => handleChange(category.id)}/>
          <label htmlFor={`${category.id}`}>{category.name}</label>
        </div>
      ))}
    </form>
  )
};

export default Filter;
