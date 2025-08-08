interface SeparatorProps {
  text?: string;
}

const Separator = ({ text }: SeparatorProps) => {
  return (
    <div className="flex items-center my-4">
      <hr className="flex-grow border-t border-border" />
      {text && <span className="mx-2 text-sm text-text-muted">{text}</span>}
      <hr className="flex-grow border-t border-border" />
    </div>
  );
};

export default Separator;
