import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class4Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"Análisis de algoritmos"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class4Slide1;
