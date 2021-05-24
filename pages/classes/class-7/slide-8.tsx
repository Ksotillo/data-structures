import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class7Slide8 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"¿Qué diferencia un Arreglo de una Lista Enlazada?"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class7Slide8;
