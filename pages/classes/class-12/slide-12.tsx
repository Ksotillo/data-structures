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
class HashNode<K, V> {
    K key;
    V value;
    final int hashCode;
    HashNode<K, V> next;

    HashNode(K key, V value, int hashCode) {
        this.key = key;
        this.value = value;
        this.hashCode = hashCode;
        this.next = null;
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
                                Anatomía de un Nodo de Hash Table
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
                                        Veamos como cada nodo dentro de una
                                        Hash Table está
                                        representado. Cada nodo consiste en:
                                        <ul>
                                            <li>
                                                La llave conrrespondiente al nodo.
                                            </li>
                                            <li>
                                                La información correspondiente
                                                al nodo.
                                            </li>
                                            <li>
                                                El código hash generado para los valores
                                                guardados en el.
                                            </li>
                                            <li>
                                                La dirección del siguiente nodo.
                                            </li>
                                        </ul>
                                        Envolvemos tanto la inforamción como la
                                        referencia al siguiente Nodo en una
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
                                    src={
                                        "/images/class-12/hash_table_node.png"
                                    }
                                    width={717}
                                    height={524}
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
