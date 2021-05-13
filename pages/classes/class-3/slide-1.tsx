import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class3Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"Vectores y Matrices"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class3Slide1;
