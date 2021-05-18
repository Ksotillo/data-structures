import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class5Slide4 = () => {
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
                                Pero la realidad es que hay muchas maneras más
                                fáciles y eficientes de poder acomodar dichar
                                ropa
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
                                        Por ejemplo:
                                        <ul>
                                            <li>
                                                En gabetas por tipo de ropa.
                                            </li>
                                            <li>Guindada por colores</li>
                                            <li>Doblada por colores</li>
                                            <li>
                                                Doblada y en gabetas por colores
                                            </li>
                                        </ul>
                                        De esta forma se nos es más fácil
                                        guardarlas, de manera de que ahora
                                        podemos tener más espacio y podemos
                                        localizar la ropa más fácilmente.
                                        <br />
                                        <br />
                                        Esto es un buen ejemplo de lo que
                                        podemos hacer con una estructura de dato
                                    </p>
                                </GlassCardContent>
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
                                    src={"/images/class-5/ropa_ordenada.png"}
                                    width={475}
                                    height={336}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class5Slide4;
