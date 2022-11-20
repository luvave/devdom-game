interface Props {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const defaultProps = {
  onClick: undefined,
  disabled: false,
  className: undefined,
};

export const OutlinedButton = ({
  disabled, className, title, onClick,
}: Props) => (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${className}`}
    >
      {title}
    </button>
);

OutlinedButton.defaultProps = defaultProps;
