import SearchIcon from "../../../assets/images/icons/search.svg";

interface GSearchButtonProps {
  onClick: () => void;
}

export const GSearchButton: React.FC<GSearchButtonProps> = ({ onClick }) => {
  return (
    <button className="w-[16px] h-[16px] cursor-pointer" onClick={onClick}>
      <img src={SearchIcon} alt="search" />
    </button>
  );
};
