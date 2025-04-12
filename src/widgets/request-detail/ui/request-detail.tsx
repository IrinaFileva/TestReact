import { getRequestById } from 'entities/request';
import { DeleteRequestBtn } from 'features/delete-request';
import { EditRequestModal } from 'features/edit-request';
import { Link, useParams } from 'react-router-dom';
import { Path, useAppSelector } from 'shared';
import './request-detail.scss';

export const DetailRequest = () => {
  const params = useParams();
  const request = useAppSelector(getRequestById(params.id));

  return (
    request && (
      <div className="detail-wrapper">
        <Link to={Path.REQUESTS}>&#215;</Link>
        <p className="detail-title">{request.title}</p>
        <p>{request.category}</p>
        <p>{request.description}</p>
        <p>{`Дата создания: ${request.date}`}</p>
        <div className="btns-wrapper">
          <DeleteRequestBtn request={request} />
          <EditRequestModal request={request} />
        </div>
      </div>
    )
  );
};
