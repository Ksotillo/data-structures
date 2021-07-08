import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class13Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"UML: Unified Model Language"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class13Slide1;
