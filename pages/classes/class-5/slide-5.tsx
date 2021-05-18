import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class5Slide5 = () => {
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
                                Entonces, siguiendo esa analogía tenemos que:
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
                                    <p>Existen formas en las que nosotros podemos guardar la información, cada una de estas formas nos ayuda a resolver problemas específicos, algunas de ellas son

                                        <ul>
                                            <li>Listas</li>
                                            <li>Pilas</li>
                                            <li>Colas</li>
                                            <li>Hash Tables</li>
                                            <li>Árboles</li>
                                        </ul>

                                        No todas son buenas para todo, y cada una tiene sus ventaja y desventaja con respecto a lo que pueden hacerse con ellas. No existe algo como la mejor estructura de datos
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
                                    src={"/images/class-5/data-structures.png"}
                                    width={493}
                                    height={338}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class5Slide5;
