import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class13Slide2 = () => {
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
                            <H1 shadow>Representación de una clase</H1>
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
                                        En la parte superior se colocan los
                                        atributos o propiedades con su tipo, y debajo las
                                        operaciones de la clase, con sus respectivos parametros. Notarás que el
                                        primer caracter con el que empiezan es
                                        un símbolo. Este denotará la visibilidad
                                        del atributo o método
                                        <br />
                                        <br />
                                        Estos son los niveles de visibilidad que
                                        puedes tener:
                                        <ul>
                                            <li>- private</li>
                                            <li>+ public</li>
                                            <li># protected</li>
                                            <li>~ default</li>
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
                                        "/images/class-13/class-representation.png"
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
export default Class13Slide2;
