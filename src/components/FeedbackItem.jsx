import { useContext } from 'react';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';
import { FaTimes, FaEdit } from 'react-icons/fa'; // Import the necessary icon components

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  if (!item || !item.rating) {
    return <div>Loading or no data available</div>;
  }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>

      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' /> {/* Render FaTimes icon */}
      </button>
      <button onClick={() => editFeedback(item)} className='edit'>
        <FaEdit color='purple' /> {/* Render FaEdit icon */}
      </button>

      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
