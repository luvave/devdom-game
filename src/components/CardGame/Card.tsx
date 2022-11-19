interface Props {
  title: string;
  description: string;
  buttonText?: string;
  imgSrc?: string;
  onBtnClick?: () => void;
}

const defaultProps = {
  buttonText: undefined,
  imgSrc: undefined,
  onBtnClick: undefined,
};

export const Card = ({
  description, title, buttonText, imgSrc, onBtnClick,
}: Props) => (
    <div className="card w-96 bg-base-100 shadow-xl">
      {typeof imgSrc !== 'undefined' && (
      <figure className="px-10 pt-10">
        <img src={imgSrc} alt={title} className="rounded-xl" />
      </figure>
      )}
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        {typeof buttonText !== 'undefined' && (
        <div className="card-actions">
          <button type="button" className="btn btn-primary" onClick={onBtnClick}>{buttonText}</button>
        </div>
        )}
      </div>
    </div>
);

Card.defaultProps = defaultProps;
