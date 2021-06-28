import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class12Slide11 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"¿Cómo construir una Hash Table?"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class12Slide11;
