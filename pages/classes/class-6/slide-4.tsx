import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class6Slide4 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={6}>
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
                                Esto sucede a las direcciones de memoria (Memory
                                Address)
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
                                    Para el ejemplo a continuación tenemos la
                                    variable saludo con el valor "Hola", la cual
                                    se forma de 4{" "}
                                    <i style={{ margin: "0 0.25rem" }}>bytes</i>
                                    , por lo que la computadora debe de buscar 4
                                    bytes que estén libres en la memoria para
                                    poder guardar esa información.
                                    <br />
                                    <br />
                                    Los cuadros con color significaría espacios
                                    de memoria ya ocupados, por lo que la
                                    información no puede guardarse ahí, se puede
                                    notar como estos están dispersos, ya que, de
                                    nuevo, esta asignación se hace de manera
                                    aleatoria.
                                    <br />
                                    <br />
                                    Ahora, la dirección de memoria son cada uno de esos cuadros, cada uno tiene un identificador único,
                                    de manera tal de que se pueda saber la dirección en la cual se tiene esa información y el consecutivo
                                    de las demás direcciones que son necesarias para recuperar la información completa
                                </p>
                            </GlassCard>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={6}>
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
                                    src={"/images/class-6/memory-slots-2.png"}
                                    width={457}
                                    height={296}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class6Slide4;
