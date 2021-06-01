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

const listCodeBlock = `
class DoublyLinkedList  {
    Node head;
    Node tail;
    int length;
    // Constructores
    public List(){
        this.head = this.tail = null;
    }
    public List(Node n){
        this.head = this.tail = n;
    }
}
`;

const Class8Slide5 = () => {
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
                            <H1 shadow>Anatomía de una Lista Doblemente Enlazada</H1>
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
                                        Podemos tener los siguientes atributos
                                        para una Lista Doblemente Enlazada:
                                        <ul>
                                            <li>
                                                <b>Head: </b> el fundamental, ya
                                                que necesitamos un lugar para
                                                poder empezar a recorrer nuestra
                                                lista.
                                            </li>
                                            <li>
                                                <b>Tail (opcional): </b> la
                                                cola, para poder saber cual es
                                                nuestro último nodo, aunque este
                                                es fácilmente identificable
                                                porque su apuntador va{" "}
                                                <i> NULL</i>.
                                            </li>
                                            <li>
                                                <b>Tamaño (opcional): </b> para
                                                poder saber el largo de nuestra
                                                lista.
                                            </li>
                                        </ul>
                                        Esto lo definimos de la siguiente manera
                                        <CodeBlock
                                            text={listCodeBlock}
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
                                        "/images/class-8/doubly_linked_list_node.png"
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
export default Class8Slide5;
