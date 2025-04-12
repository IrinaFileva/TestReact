import { useNavigate } from 'react-router-dom';
import { addToStore, Path, Request, useAppDispatch } from 'shared';
import { addRequest, RequestForm } from 'entities/request';

export const AddRequestForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (data: Request) => {
    const newRequest = {
      ...data,
      id: String(crypto.randomUUID()),
      date: new Date().toLocaleString(),
    };

    dispatch(addRequest(newRequest));
    addToStore(newRequest);
    navigate(`${Path.REQUESTS}`);
  };

  return <RequestForm type={'create'} onSubmit={onSubmit} />;
};
