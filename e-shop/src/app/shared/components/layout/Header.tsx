import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {ReactComponent as LogoIcon} from '../../../assets/icons/logo.svg';
import {ReactComponent as SearchIcon} from '../../../assets/icons/search.svg';
import {ReactComponent as CartIcon} from '../../../assets/icons/cart.svg';
import {ReactComponent as UserIcon} from '../../../assets/icons/user.svg';
import { RootState } from '../../../app.store';

const Header: React.FC= () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.register);
  const quantityCart = cart.reduce((total, item) => total + item.quantity, 0);
  
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <h1 className="logo">
            <Link to='/' className="logo-link">
              <LogoIcon />
            </Link>
          </h1>
          <nav>
            <ul className="nav-list">
              <li className="nav-item">
                <a className="nav-link" href="/">Men</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Women</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Kids</a>
              </li>
            </ul>
          </nav>
          {user && <span style={{color: 'red'}}>{user}</span>}
          <ul className="actions-list">
            <li className="action-item">
              <button className="btn btn-icon-sm">
                <SearchIcon />
              </button>
            </li>
            <li className="action-item">
              <Link to='/cart' className="btn btn-icon-sm">
                <CartIcon />
              </Link>
              <span className="action-quantity">{quantityCart}</span>
            </li>
            <li className="action-item">
              <Link to='/Register' className="btn btn-icon-sm">
                <UserIcon />
              </Link>
            </li>
          </ul>
          <ul className="actions-list actions-list-mobile">
            <li className="action-item">
              <button className="btn btn-icon-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.807039 1.66625H2.20046L4.28922 11.0793C3.76888 11.3274 3.33136 11.7204 3.02928 12.2109C2.72719 12.7015 2.57339 13.2688 2.58636 13.8445C2.55115 14.5957 2.81484 15.3303 3.31989 15.8881C3.82493 16.4458 4.53034 16.7814 5.28218 16.8216H16.344C16.4559 16.8253 16.5673 16.8065 16.6717 16.7663C16.7762 16.7261 16.8714 16.6653 16.9519 16.5876C17.0323 16.5098 17.0963 16.4167 17.1399 16.3138C17.1836 16.2109 17.2061 16.1003 17.2061 15.9885C17.2061 15.8767 17.1836 15.7661 17.1399 15.6631C17.0963 15.5602 17.0323 15.4671 16.9519 15.3894C16.8714 15.3117 16.7762 15.2509 16.6717 15.2107C16.5673 15.1705 16.4559 15.1517 16.344 15.1554H5.28127C4.97417 15.1104 4.69604 14.9494 4.5042 14.7057C4.31235 14.462 4.2214 14.1541 4.25009 13.8454C4.22105 13.5373 4.31126 13.2297 4.50219 12.9859C4.69313 12.7422 4.97028 12.5807 5.27672 12.5346H16.344C16.5158 12.5347 16.6834 12.4818 16.8239 12.3832C16.9645 12.2846 17.0712 12.1451 17.1294 11.9837L19.9509 4.17427C19.9961 4.04843 20.0104 3.91357 19.9925 3.78106C19.9746 3.64855 19.9251 3.52228 19.8481 3.41291C19.771 3.30355 19.6688 3.21429 19.55 3.15267C19.4312 3.09105 19.2993 3.05889 19.1654 3.05889H4.21823L3.68489 0.653593C3.64402 0.46824 3.54098 0.302393 3.39284 0.183527C3.2447 0.0646614 3.06035 -8.99797e-05 2.87032 9.38468e-08H0.807039C0.59058 0.00714242 0.385377 0.0980469 0.234784 0.253508C0.08419 0.40897 0 0.616813 0 0.833126C0 1.04944 0.08419 1.25728 0.234784 1.41274C0.385377 1.56821 0.59058 1.65911 0.807039 1.66625ZM17.974 4.72696L15.7579 10.8702H5.95022L4.58502 4.72696H17.974Z"
                    fill="#333333"
                  />
                  <path
                    d="M5.95573 18.3325C5.73927 18.3396 5.53407 18.4306 5.38347 18.5861C5.23287 18.7417 5.14868 18.9496 5.14868 19.166C5.14868 19.3825 5.23287 19.5904 5.38347 19.746C5.53407 19.9015 5.73927 19.9925 5.95573 19.9996H7.01515C7.12701 20.0033 7.23847 19.9845 7.3429 19.9442C7.44734 19.904 7.5426 19.8432 7.62304 19.7654C7.70348 19.6877 7.76744 19.5945 7.81112 19.4916C7.85481 19.3886 7.87732 19.2779 7.87732 19.166C7.87732 19.0542 7.85481 18.9435 7.81112 18.8405C7.76744 18.7376 7.70348 18.6444 7.62304 18.5667C7.5426 18.4889 7.44734 18.4281 7.3429 18.3878C7.23847 18.3476 7.12701 18.3288 7.01515 18.3325H5.95573Z"
                    fill="#333333"
                  />
                  <path
                    d="M13.6528 18.3325C13.4363 18.3396 13.2311 18.4306 13.0805 18.5861C12.9299 18.7417 12.8457 18.9496 12.8457 19.166C12.8457 19.3825 12.9299 19.5904 13.0805 19.746C13.2311 19.9015 13.4363 19.9925 13.6528 19.9996H14.7122C14.824 20.0033 14.9355 19.9845 15.0399 19.9442C15.1444 19.904 15.2396 19.8432 15.3201 19.7654C15.4005 19.6877 15.4645 19.5945 15.5081 19.4916C15.5518 19.3886 15.5743 19.2779 15.5743 19.166C15.5743 19.0542 15.5518 18.9435 15.5081 18.8405C15.4645 18.7376 15.4005 18.6444 15.3201 18.5667C15.2396 18.4889 15.1444 18.4281 15.0399 18.3878C14.9355 18.3476 14.824 18.3288 14.7122 18.3325H13.6528Z"
                    fill="#333333"
                  />
                </svg>
              </button>
            </li>
            <li className="action-item">
              <button className="btn btn-icon-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.0463 14.5505L13.6253 12.7368C13.5095 12.6909 13.4101 12.6115 13.3398 12.5087C13.2694 12.406 13.2314 12.2845 13.2305 12.16V11.1263C13.2294 10.9932 13.2735 10.8636 13.3558 10.7589C14.5263 9.24171 15.1631 7.38047 15.1674 5.46421C15.1684 2.19579 13.0916 0 10 0C6.90842 0 4.83158 2.19579 4.83158 5.46526C4.83593 7.38151 5.47274 9.24272 6.64316 10.76C6.72518 10.8644 6.76935 10.9936 6.76842 11.1263V12.1589C6.76755 12.2835 6.72951 12.4049 6.65918 12.5077C6.58886 12.6104 6.48944 12.6899 6.37368 12.7358L1.95263 14.5495C1.37562 14.7832 0.881521 15.1839 0.533644 15.7001C0.185766 16.2164 -5.07762e-05 16.8248 1.04078e-08 17.4474V19.1674C0.000278956 19.3883 0.0882363 19.6001 0.244552 19.7562C0.400868 19.9123 0.61276 20 0.833684 20H19.1663C19.3874 20 19.5995 19.9122 19.7558 19.7558C19.9122 19.5995 20 19.3874 20 19.1663V17.4474C19.9998 16.8249 19.8137 16.2166 19.4656 15.7005C19.1176 15.1844 18.6234 14.784 18.0463 14.5505ZM18.3337 18.3337H1.66632V17.4474C1.66737 17.1556 1.75549 16.8708 1.9194 16.6295C2.0833 16.3881 2.31552 16.2012 2.58632 16.0926L7.00737 14.2789C7.42938 14.1081 7.79077 13.8152 8.04526 13.4377C8.29974 13.0602 8.43573 12.6153 8.43579 12.16V11.1263C8.43641 10.6139 8.26268 10.1164 7.94316 9.71579C7.01363 8.49301 6.50676 7.00122 6.49895 5.46526C6.49895 2.66526 8.30737 1.66737 10.0011 1.66737C11.6947 1.66737 13.5032 2.66526 13.5032 5.46526C13.4953 7.00122 12.9885 8.49301 12.0589 9.71579C11.7395 10.1165 11.5658 10.6139 11.5663 11.1263V12.1589C11.5664 12.6142 11.7024 13.0591 11.9568 13.4366C12.2113 13.8141 12.5727 14.1071 12.9947 14.2779L17.4158 16.0916C17.6866 16.2001 17.9188 16.3871 18.0827 16.6284C18.2466 16.8698 18.3347 17.1546 18.3358 17.4463L18.3337 18.3337Z"
                    fill="#333333"
                  />
                </svg>
              </button>
            </li>
            <li className="action-item">
              <button className="btn btn-icon-sm">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="2" width="20" height="2" rx="1" fill="#333333" />
                  <rect y="9" width="20" height="2" rx="1" fill="#333333" />
                  <rect y="16" width="20" height="2" rx="1" fill="#333333" />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
};

export default Header;
