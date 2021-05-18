import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import TitleSlide from "components/TitleSlide/TitleSlide";

const Class5Slide6 = () => {
    const controls = useSlideAnimationControls();
    return (
        <TitleSlide
            title={"Las estructuras de datos son colecciones de valores, las relaciones entre ellos y las funciones u operaciones que se puedan aplicar a los datos"}
            controls={controls}
            variants={variants}
            transition={transition}
            titleSize="4rem"
        />
    );
};

export default Class5Slide6;
