import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class11Slide4 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"Árboles Binarios de Búsqueda"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class11Slide4;
