import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H2, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class3Slide2 = () => {
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
                            <H2 shadow>
                                Los arreglos son un tipo de estructura de datos
                                que nos permite almacenar un conjunto de datos
                                de un mismo tipo.
                            </H2>
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
                                    El tamaño de los arrays se declara en un
                                    primer momento y no puede cambiar en tiempo
                                    de ejecución como puede producirse en otros
                                    lenguajes.
                                    <br />
                                    <br />
                                    Podemos acceder a su tamaño a través del
                                    atributo{" "}
                                    <code style={{ color: "#1a4551" }}>
                                        .length
                                    </code>
                                    <br />
                                    <br />
                                    Los arreglos se enumeran desde el elemento cero, que sería el primer elemento, hasta el tamaño - 1 que sería el último elemento.
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
                            <RoundedImageContainer mt={3}>
                                <RoundedImage
                                    src={
                                        "/images/class-3/Arrays_and_matrix.png"
                                    }
                                    width={400}
                                    height={400}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class3Slide2;
