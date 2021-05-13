import Icon from "components/Icon/Icon";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { GlassIconButton } from "UI/Button/GlassButton";

import styled from "styled-components";
import { Text, H3, H1 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCard } from "UI/Card/Card";
import { Box } from "UI/Box/Box";
import { CodeBlock, dracula } from "react-code-blocks";
import { RoundedImage } from "UI/Image/Image";
import { ColoredText } from "UI/Button/Button";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const customVariants = {
    visible: variants.visible,
    hidden: variants.hidden,
};

const Class4Slide2 = () => {
    const controls = useSlideAnimationControls();

    return (
        <Container>
            <Row>
                <Col col={12}>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={customVariants}
                        custom={0}
                        transition={transition}
                    >
                        <H1 shadow>¿Qué es la eficiencia?</H1>
                    </motion.div>
                </Col>
                <Col col={6}>
                    <Box mt={4} pr={3}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={customVariants}
                            custom={1}
                            transition={transition}
                        >
                            <GlassCard whiteStyle>
                                <motion.div
                                    initial="hidden"
                                    animate={controls}
                                    variants={customVariants}
                                    custom={2}
                                    transition={transition}
                                >
                                    <p>
                                        La eficiencia de un algoritmo es la
                                        propiedad mediante la cual un algoritmo
                                        debe alcanzar la solución al problema en
                                        el tiempo más corto posible o utilizando
                                        la cantidad más pequeña posible de
                                        recursos físicos y que sea compatible
                                        con su exactitud o corrección.
                                        <br />
                                        <br />
                                        Un buen programador buscará el algoritmo
                                        más eficiente dentro del conjunto de
                                        aquellos que resuelven con exactitud un
                                        problema dado
                                    </p>
                                </motion.div>
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
                            custom={3}
                            transition={transition}
                        >
                            <RoundedImageContainer>
                                <RoundedImage
                                    src={"/images/class-4/progarmmer.svg"}
                                    width={520}
                                    height={277}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};

export default Class4Slide2;
