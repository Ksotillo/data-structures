import { Container, Row, Col } from "styled-bootstrap-grid";

import { H3, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";


const Class4Slide13 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={12}>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        custom={0}
                        transition={transition}
                    >
                        <H2 shadow textAlign="center">Analicemos un algoritmo usando la Big-O... ¿Recuerdas Insertion Sort?</H2>
                    </motion.div>
                </Col>
                <Col col={12} style={{ paddingTop: "1.5rem" }}>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        custom={1}
                        transition={transition}
                    >
                    <iframe
                        src="https://visualgo.net/en/sorting"
                        height="600px"
                        width="100%"
                    ></iframe>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Class4Slide13;
