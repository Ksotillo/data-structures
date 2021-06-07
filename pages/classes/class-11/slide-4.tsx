import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class11Slide4 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"¿Cómo construir una Cola?"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class11Slide4;
