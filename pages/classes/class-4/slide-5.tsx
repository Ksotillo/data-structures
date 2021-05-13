import Image from "next/image";
import { Container, Row, Col } from "styled-bootstrap-grid"
import { Text, H2, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box, WhiteBox } from "UI/Box/Box";
import { GlassCard } from "UI/Card/Card";
import { ColoredText } from "UI/Button/Button";

const items = [
    {
        title: "Notación Omega (Ω-notation)",
        imagePath: "/images/class-4/omega.png",
    },
    {
        title: "Notación Theta (Θ-notation)",
        imagePath: "/images/class-4/theta.png",
    },
    {
        title: "Notación Big-O (O-notation)",
        imagePath: "/images/class-4/big0.png",
    },
];

const Class4Slide5 = () => {
    const controls = useSlideAnimationControls();
    return (
        <Container>
            <Row>
                <Col col={12}>
                    <Box display="flex" justifyContent="center">
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            custom={0}
                            transition={transition}
                        >
                            <H2>¿Cómo podemos analizar nuestros algoritmos?</H2>
                        </motion.div>
                    </Box>
                </Col>
                {items.map((item, index) => (
                    <Col col={4}>
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            custom={index + 1}
                            transition={transition}
                        >
                            <WhiteBox
                                p={2}
                                active
                                display="flex"
                                justifyContent="center"
                                flexDirection="column"
                                alignItems="center"
                            >
                                <motion.div
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                    custom={index + 2}
                                    transition={transition}
                                >
                                    <H3>
                                        <ColoredText>{item.title}</ColoredText>
                                    </H3>
                                </motion.div>
                                <motion.div
                                    initial="hidden"
                                    animate={controls}
                                    variants={variants}
                                    custom={index + 3}
                                    transition={transition}
                                >
                                    <Image
                                        src={item.imagePath}
                                        width={886}
                                        height={962}
                                    />
                                </motion.div>
                            </WhiteBox>
                        </motion.div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};
export default Class4Slide5;
