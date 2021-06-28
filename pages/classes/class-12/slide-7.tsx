import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class12Slide7 = () => {
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
                            <H1 shadow>Hashing en las Hash Table</H1>
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
                                        En una Hash Table, un nuevo indice es
                                        generado utiliando un key, y el elemento
                                        correspondiente a ese key es guardado en
                                        dicho indice. Este proceso es llamado{" "}
                                        <b>Hashing</b>
                                        <br />
                                        <br />
                                        Sea{" "}
                                        <code style={{ color: "#1a4551" }}>
                                            k
                                        </code>{" "}
                                        una llave y{" "}
                                        <code style={{ color: "#1a4551" }}>
                                            h(x)
                                        </code>
                                        una función hash.
                                        <br />
                                        <br />
                                        Aquí,{" "}
                                        <code style={{ color: "#1a4551" }}>
                                            h(x)
                                        </code>{" "}
                                        nos dará un nuevo indice en dónde se
                                        almancenará el elemento que está
                                        enlazado con{" "}
                                        <code style={{ color: "#1a4551" }}>
                                            k
                                        </code>
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
                                        "/images/class-12/hasing-in-hash-tables.png"
                                    }
                                    width={725}
                                    height={671}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class12Slide7;
