import { Container, Row, Col } from "styled-bootstrap-grid";
import { Text, H1, H3 } from "UI/Typography/Typography";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { Box } from "UI/Box/Box";
import { GlassCard, GlassCardContent } from "UI/Card/Card";
import { RoundedImage } from "UI/Image/Image";
import { RoundedImageContainer } from "UI/ImageContainer/RoundedImage";
import { CodeBlock, dracula } from "react-code-blocks";

const nodeCodeBlock = `
class Node {
    int value;
    Node next;

    Node(int d) {
      value = d;
      next = null;
    }
  }
`;

const Class7Slide5 = () => {
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
                                Anatomía de un Nodo de Lista Enlazada
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
                                <GlassCardContent whiteStyle style={{ maxHeight: "100%" }}>
                                    <p>
                                        Veamos como cada nodo dentro de una
                                        lista enlazada está representado. Cada
                                        nodo consiste en:
                                        <ul>
                                            <li>
                                                La información correspondiente
                                                al nodo
                                            </li>
                                            <li>La dirección de otro nodo</li>
                                        </ul>
                                        Envolvemos tanto la inforamción
                                        como la referencia al siguiente Nodo en
                                        una estructura como:
                                        <CodeBlock
                                            text={nodeCodeBlock}
                                            language={"java"}
                                            showLineNumbers
                                            wrapLines
                                            theme={dracula}
                                        />
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
                            <RoundedImageContainer mt={6}>
                                <RoundedImage
                                    src={
                                        "/images/class-7/singly_linked_list_node.png"
                                    }
                                    width={717}
                                    height={462}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class7Slide5;
