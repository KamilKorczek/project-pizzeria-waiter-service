import { useDispatch } from 'react-redux';
import { editTableRequest } from '../../../redux/tablesRedux';

const TableCard = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editTableRequest());
  }
  return (
    <h1>TableCard</h1>
  )
}

export default TableCard