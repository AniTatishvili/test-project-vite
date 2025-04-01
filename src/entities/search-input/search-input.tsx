// components/SearchInput/SearchInput.tsx
import { XButton } from "../../shared/ui/buttons/XButton";
import { useSearchStore } from "../../store/search-store";

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

  if (!isOpen) return null;

  return (
    <div className="w-full h-full bg-white flex justify-center items-center gap-4 absolute top-0 left-0">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        className="text-[#9B9B9B] text-[14px] font-weight-[400] border border-gray-500 px-3 py-1 w-full md:w-50"
        autoFocus
        aria-label="Search posts"
      />
      <XButton onClick={handleClose} className="cursor-pointer" />
    </div>
  );
};
