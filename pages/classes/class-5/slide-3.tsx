import Image from "next/image";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H2, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box, WhiteBox } from "UI/Box/Box";
import { GlassCard } from "UI/Card/Card";
import { ColoredText } from "UI/Button/Button";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";

const Class4Slide3 = () => {
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
                            <H2>
                                Si nos dan la ropa en bruto pues muy facilmente
                                podemos terminar organizandola de esta manera:
                            </H2>
                        </motion.div>
                    </Box>
                </Col>
                <Col col={12} style={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div
                        initial="hidden"
                        animate={controls}
                        variants={variants}
                        custom={1}
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
                                custom={2}
                                transition={transition}
                            >
                                {/* ropa_desordenada.png */}
                                <Image
                                    src={
                                        "/images/class-5/ropa_desordenada.png"
                                    }
                                    width={336}
                                    height={260}
                                />
                            </motion.div>
                        </WhiteBox>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
};
export default Class4Slide3;
