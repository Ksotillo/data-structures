import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class1Slide1 = () => {
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

export default Class1Slide1;
