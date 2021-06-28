import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class12Slide8 = () => {
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
                                Okay pero... ¿Cómo funciona entonces?
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
                                <GlassCardContent
                                    whiteStyle
                                    style={{
                                        maxHeight: "100%",
                                        padding: "0rem",
                                    }}
                                >
                                    <p>
                                        Supongamos un key "Mandarinas" cuyo valor sea la cantidad de 20, para poder 
                                        registrar esa relación en nuestra Hash Table, tomaríamos nuestro par, lo pasaríamos
                                        por una función Hash que se encarga de realizar los calculos para nuestro valor fijo que será
                                        la dirección que tendrá nuestro par dentro de la Hash Table y
                                        luego se guardaría en uno de nuestros Buckets de la Hash Table que justamente tiene dicha dirección.
                                        <br />
                                        <br />
                                        Entonces el proceso es muy simple, se es dado un par key-value y basado en el valor generado por la función Hash, un índice
                                        es generado, dicho indice contrandrá el valor correspondiente del key que le corresponde. De forma tal que en cualquier
                                        momento que necesitemos recuperar un valor correspondiente a una llave, eso simplemente tiene una complejidad de O(1)
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
                            <RoundedImageContainer mt={4}>
                                <RoundedImage
                                    src={
                                        "/images/class-12/hashing-in-action.png"
                                    }
                                    width={675}
                                    height={472}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class12Slide8;
