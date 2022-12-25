import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { Link } from 'react-router-dom';

const Card = ({ flag, name, capital, region, population, id }) => {
  return (
    <div className='col-12 col-md-6  col-lg-4 col-xl-3 mb-5 '>
      <div className='card h-100 shadow-lg'>
        <img src={flag} alt='flag-img' className='card-img-top' />
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <h5 className='card-title text-truncate'>{name}</h5>
            <div className='hover-overlay ripple shadow-1-strong rounded'>
              <Link
                to={`/edit/${id}`}
                style={{ textDecoration: 'none', color: 'black' }}>
                <CreateIcon className='' role='button'></CreateIcon>
              </Link>
            </div>
          </div>
          <table className='table-sm '>
            <tbody>
              <tr className=''>
                <th scope='row '>Столица</th>
                <td className=' opacity-75'>{capital}</td>
              </tr>
              <tr className=''>
                <th scope='row '>Регион</th>
                <td className=' opacity-75'>{region}</td>
              </tr>
              <tr className=''>
                <th scope='row '>Население</th>
                <td className=' opacity-75'>{population}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Card;
