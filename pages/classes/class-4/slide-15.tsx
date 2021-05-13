import { Container, Row, Col } from "styled-bootstrap-grid";

import { H3, H2 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";

const Class4Slide15 = () => {
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
                        <H2 shadow textAlign="center">
                            Nosotros queremos conocer el comportamiento de
                            nuestro algoritmos en el peor de los casos, así que
                            para probar eso podemos buscar como se comporta
                            nuestro algoritmo cuando este tiende a manejar una
                            cantidad enorme de datos, o lo que es lo mismo,
                            cuando <code>n</code> tiende a infinito
                        </H2>
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
                            src="https://www.desmos.com/calculator?lang=es"
                            height="400px"
                            width="100%"
                        ></iframe>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};

export default Class4Slide15;
