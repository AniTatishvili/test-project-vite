// components/SearchInput/SearchInput.tsx
import { XButton } from "../../../shared/ui/buttons/XButton";
import { useSearchStore } from "../../../store/search-store";

interface SearchInputProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchInput = ({ isOpen, onClose }: SearchInputProps) => {
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);
  const searchQuery = useSearchStore((state) => state.searchQuery);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClose = () => {
    setSearchQuery("");
    onClose();
  };

  const handleClear = () => {
    setSearchQuery("");
  };

  if (!isOpen) return null;

  return (
    <div className="w-full h-full bg-white flex justify-center items-center gap-4 absolute top-0 left-0">
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
          className="text-[#9B9B9B] text-[14px] font-weight-[400] border border-[#E9E9E9] rounded px-3 py-2 w-full md:w-70"
          autoFocus
          aria-label="Search posts"
          placeholder="Search posts"
        />
        <XButton onClick={handleClear} className="w-4 h-4 absolute right-3 top-3 cursor-pointer" />
      </div>
      <button onClick={handleClose} className="text-black border border-[#E9E9E9] rounded px-3 py-2 cursor-pointer hover:text-[#969696]">
        Close
      </button>
    </div>
  );
};
