import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class13Slide4 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"Diagramas de Clases"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class13Slide4;
