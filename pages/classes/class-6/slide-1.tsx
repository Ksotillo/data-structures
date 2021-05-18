import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class6Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"¿Cómo funciona la memoria y los datos que se guardan en ella?"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class6Slide1;
