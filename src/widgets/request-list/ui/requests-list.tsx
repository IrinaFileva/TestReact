import { useNavigate } from 'react-router-dom';
import { getRequests } from 'entities/request';
import { Button, Path, useAppSelector } from 'shared';
import './requests-list.scss';

export const RequestsList = () => {
  const requests = useAppSelector(getRequests);
  const navigate = useNavigate();

  return (
    <main>
      {!requests.length && <h1>{'Нет данных'}</h1>}
      <ul>
        {requests.map((n) => {
          return (
            <li key={n.id} onClick={() => navigate(`${Path.REQUESTS}${n.id}`)}>
              <span>{n.title}</span>
              <span className="date">{n.date}</span>
            </li>
          );
        })}
      </ul>
      <Button
        title={'Создать заявку'}
        type={'button'}
        onClick={() => {
          navigate(Path.NEW);
        }}
      />
    </main>
  );
};
