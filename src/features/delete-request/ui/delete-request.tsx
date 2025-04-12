import { deleteRequest } from 'entities/request';
import { useNavigate } from 'react-router-dom';
import { Button, Path, Request } from 'shared';
import { removeFromStore, useAppDispatch } from 'shared/lib';

type Props = {
  request: Request;
};

export const DeleteRequestBtn = ({ request }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handlerBtn = () => {
    dispatch(deleteRequest(request));
    removeFromStore(request.id);
    navigate(Path.REQUESTS);
  };

  return <Button title={'Удалить заявку'} type="button" onClick={handlerBtn} />;
};
