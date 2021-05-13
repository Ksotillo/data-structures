import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class4Slide1 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={
                "Veamos algunos de los términos de complejidad Big O más utilizados"
            }
            titleSize={"5.5rem"}
            controls={controls}
            variants={variants}
            transition={transition}
        />
    );
};

export default Class4Slide1;
