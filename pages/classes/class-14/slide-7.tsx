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
class TreeNode {
    int data;
    TreeNode left;
    TreeNode right;

    TreeNode(int datum) {
        this.data = datum;
        this.left = null;
        this.right = null;
    }
  }
`;

const Class11Slide12 = () => {
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
                                Anatomía de un Nodo de Árbol de Búsqueda Binario
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
                                    style={{ maxHeight: "100%", padding: 0 }}
                                >
                                    <p>
                                        Veamos como cada nodo dentro de un árbol
                                        está representado. Cada nodo consiste
                                        en:
                                        <ul>
                                            <li>El dato que guarda el nodo</li>
                                            <li>
                                                Un apuntador al hijo izquierdo
                                            </li>
                                            <li>
                                                Un apuntador al hijo derecho
                                            </li>
                                        </ul>
                                        Envolvemos tanto la inforamción como la
                                        referencia a los Nodos hijos en una
                                        estructura como:
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
                                    src={"/images/class-14/nodeTree.png"}
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
export default Class11Slide12;
