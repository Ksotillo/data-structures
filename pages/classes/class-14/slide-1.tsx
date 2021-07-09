import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class14Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"Árboles o Trees"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class14Slide1;
