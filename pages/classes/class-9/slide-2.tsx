import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class9Slide2 = () => {
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
                                ¿Qué son las Listas Enlazadas Circulares?
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
                                <p>
                                    Una lista enlazada circular, al igual que
                                    las listas enlazadas simples o dobles, es
                                    una estructura de datos que consiste en una
                                    serie de nodos conectados.
                                    <br />
                                    <br />
                                    Aquí, cada uno de estos nodos lleva consigo
                                    cierto tipo de datos y una dirección que
                                    apunta al siguiente Nodo.
                                    <br />
                                    <br />
                                    En las listas lineales simples o en las
                                    dobles siempre hay un primer nodo (cabeza o{" "}
                                    <i>HEAD</i>) y un último nodo (cola o{" "}
                                    <i>TAIL</i>). Una lista circular, por propia
                                    naturaleza, no tiene ni principio ni fin.
                                    Sin embargo, resulta útil establecer un nodo
                                    a partir del cual se acceda a la lista y así
                                    poder acceder a sus nodos. Normalmente este nodo es
                                    el último añadido a la estructura. Esta
                                    convención puede cambiar, ya que en una
                                    estructura circular no hay primero ni
                                    último.
                                    <br />
                                </p>
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
                            <RoundedImageContainer mt={6}>
                                <RoundedImage
                                    src={
                                        "/images/class-9/circular_linked_list.png"
                                    }
                                    width={638}
                                    height={367}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class9Slide2;
