import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class12Slide2 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={7}>
                    <Box pr={5}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={0}
                            transition={transition}
                        >
                            <H1 shadow>
                                Algunas terminologías con respecto a los árboles
                            </H1>
                        </motion.div>
                    </Box>
                    <Box pr={5}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={1}
                            transition={transition}
                        >
                            {/* @ts-ignore */}
                            <GlassCard mt={4} whiteStyle>
                                <GlassCardContent whiteStyle>
                                    <p>
                                        A continuación unos elementos claves que
                                        se deben conocer con respecto a los
                                        Árboles
                                        <br />
                                        <br />
                                        <ul>
                                            <li>
                                                <b>Root (raíz):</b> Es el nodo
                                                más alto del árbol.
                                            </li>
                                            <li>
                                                <b>Altura de un Nodo:</b> La
                                                altura de un nodo es el número
                                                de bordes desde el nodo hasta la
                                                hoja más profunda (es decir, el
                                                camino más largo desde el nodo
                                                hasta un nodo hoja).
                                            </li>
                                            <li>
                                                <b>Profundidad de un Nodo:</b>{" "}
                                                La profundidad de un nodo es el
                                                número de bordes desde la raíz
                                                hasta el nodo.
                                            </li>
                                            <li>
                                                <b>Altura de un árbol:</b> La
                                                altura de un árbol es la altura
                                                del nodo raíz o la profundidad
                                                del nodo más profundo.
                                            </li>
                                        </ul>
                                    </p>
                                </GlassCardContent>
                            </GlassCard>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={5}>
                    <Box display="flex" justifyContent="flex-end">
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            exit="exits"
                            custom={2}
                            transition={transition}
                        >
                            <RoundedImageContainer mt={3}>
                                <RoundedImage
                                    src={
                                        "/images/class-14/tree-terminology.png"
                                    }
                                    width={536}
                                    height={393}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class12Slide2;
