import { Link } from 'react-router-dom';
import './linkBtn.css'

export default function LinkBtn({link,title}) {
    return (
        <Link to={link} className='link-btn' >
          {
            title
          }
        </Link>
    )
}