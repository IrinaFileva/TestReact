import './button.scss';

type Props = {
  title: string;
  type: 'button' | 'submit';
  onClick?: () => void;
};

export const Button = ({ title, type, onClick }: Props) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {title}
    </button>
  );
};
