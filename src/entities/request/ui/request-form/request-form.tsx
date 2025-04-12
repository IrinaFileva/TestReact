import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import { Request, Button } from 'shared';
import { CATEGORIES } from './const';
import './request-form.scss';

type PropsForm = {
  type: 'create' | 'edit';
  onSubmit: (data: Request) => void;
  defaultValues?: Request;
};

export const RequestForm = ({ type, onSubmit, defaultValues }: PropsForm) => {
  const { control, handleSubmit } = useForm<Request>({ defaultValues });

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        rules={{ required: { value: true, message: 'Заполните поле' } }}
        name="title"
        render={({ field, fieldState: { error } }) => (
          <label>
            {'Название'}
            <input
              value={field.value || ''}
              type="text"
              onChange={(e) => field.onChange(e.target.value)}
            />
            <span>{error && error.message}</span>
          </label>
        )}
      />

      <Controller
        control={control}
        rules={{ required: { value: true, message: 'Заполните поле' } }}
        name="description"
        render={({ field, fieldState: { error } }) => (
          <label>
            {'Описание'}
            <textarea
              value={field.value || ''}
              onChange={(e) => field.onChange(e.target.value)}
            />
            <span>{error && error.message}</span>
          </label>
        )}
      />

      <Controller
        control={control}
        name="category"
        render={({ field }) => (
          <label>
            {'Категория'}
            <select
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
            >
              {CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </label>
        )}
      />
      <Button
        title={type === 'create' ? 'Создать' : 'Редактировать'}
        type={'submit'}
      />
    </form>
  );
};
