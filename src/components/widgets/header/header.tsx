import { useState } from "react";
import { PContentSection } from "../../entities/layouts/PContentSection/PContentSection";
import { HeaderMenu, MobileMenu } from "../../entities/menu";
import { GSearchButton } from "../../../shared/ui/buttons";
import { Logotype } from "../../../shared/ui/logotype";
import { SearchInput } from "../../entities/search-input";
import mobileMenuIcon from "../../../assets/images/icons/mobile-menu.svg";

export const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchOpen = () => {
    setIsSearchOpen(true);
  };

  const handleSearchClose = () => {
    setIsSearchOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="relative bg-white w-full">
        <PContentSection>
          <div className="flex justify-between items-center pt-[29px] pb-[25px] relative">
            <button className="flex md:hidden" onClick={toggleMobileMenu}>
              <img src={mobileMenuIcon} alt="menu" />
            </button>
            <Logotype />
            <div className="flex items-center gap-2">
              {!isSearchOpen && <GSearchButton onClick={handleSearchOpen} />}
              <SearchInput isOpen={isSearchOpen} onClose={handleSearchClose} />
            </div>
          </div>
        </PContentSection>

        <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
      </header>

      <HeaderMenu />
    </>
  );
};
