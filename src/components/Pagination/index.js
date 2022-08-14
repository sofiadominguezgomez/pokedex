
import './index.css'
import {BsFillCaretLeftFill} from 'react-icons/bs'
import {BsFillCaretRightFill} from 'react-icons/bs'

const Pagination = (props) => {

    const {onLeftClick, onRightClick, page, totalPages} = props;

    return (
        <div className='pagination'>
            <button className='pagination-btn' onClick={onLeftClick} > <BsFillCaretLeftFill className='arrow' /> </button>
            <div className='text-pagination'> {page} de {totalPages} </div>
            <button className='pagination-btn' onClick={onRightClick} > <BsFillCaretRightFill className='arrow' /> </button>
        </div>
    )
}
export default Pagination;