import { editRequest, RequestForm } from 'entities/request';
import { useState } from 'react';
import { addToStore, Button, Request } from 'shared';

import { useAppDispatch } from 'shared/lib/hooks';
import { Modal } from 'shared/ui/modal';

type Props = {
  request: Request;
};

export const EditRequestModal = ({ request }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (data: Request) => {
    dispatch(editRequest(data));
    addToStore(data);
    setIsOpen(false);
  };

  return (
    <>
      <Button
        title={'Редактировать заявку'}
        type="button"
        onClick={() => setIsOpen(true)}
      />
      <Modal isOpen={isOpen} closeHandler={() => setIsOpen(false)}>
        <RequestForm
          type="edit"
          onSubmit={handleSubmit}
          defaultValues={request}
        />
      </Modal>
    </>
  );
};
