import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class13Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"¿Realmente se usa UML?"}
            controls={controls}
            variants={variants}
            transition={transition}
            titleSize="4.5rem"
        />
    );
};

export default Class13Slide1;
