import { Spinner} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const Loading = () => {
    return (
        <div className='loading'>
            <div className='loading-container'>
                <Spinner className='spinner' color="secondary"/>
            </div>
            
        </div>
    )
}
export default Loading;