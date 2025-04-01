import { PContentSection } from "../../entities/layouts/PContentSection/PContentSection";
import { Posts } from "../../widgets/posts";

export const Home = () => {
  return (
    <PContentSection>
      <Posts />
    </PContentSection>
  );
};
