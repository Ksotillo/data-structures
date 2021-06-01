import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class8Slide3 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"¿Cómo construir una Lista Doblemente Enlazada?"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class8Slide3;
