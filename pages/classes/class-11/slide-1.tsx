import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class10Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"Colas o Queues"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class10Slide1;
