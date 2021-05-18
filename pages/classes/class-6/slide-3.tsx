import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class6Slide3 = () => {
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
                            <H1 shadow>¿Cómo se guardan los datos?</H1>
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
                                    En un{" "}
                                    <i style={{ margin: "0 0.25rem" }}>
                                        memory slot
                                    </i>{" "}
                                    (o espacio de memoria) podemos meter lo que
                                    es un{" "}
                                    <i style={{ margin: "0 0.25rem" }}>byte</i>{" "}
                                    (que como sabemos son 8{" "}
                                    <i style={{ margin: "0 0.25rem" }}>bits</i>) y si queremos guardar 
                                    el valor de la variable edad que es 25, podemos hacerlo guardando 
                                    su representación en binario.
                                    <br/>
                                    <br/>
                                    Los datos guardados en los espacios de memoria se hace forma totalmente
                                    aleatoria, no es algo que decidimo nosotros, sino que la computadora
                                    lo hace automáticamente pero... ¿Cómo sabemos dónde se guarda esta información entonces?
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
                                    src={"/images/class-6/memory-slots.png"}
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
export default Class6Slide3;
