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

const queueCodeBlock = `
class Queue  {
    Node head;
    int length;
    // Constructores
    public Queue(){
        this.head = null;
    }
    public Queue(Node n){
        this.head = n;
    }
}
`;

const Class11Slide5 = () => {
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
                            <H1 shadow>Anatomía de una Cola</H1>
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
                                        para una Cola:
                                        <ul>
                                            <li>
                                                <b>First: </b> es el primero en nuestra cola, sería
                                                el próximo en desencolar.
                                            </li>
                                            <li>
                                                <b>Last: </b> sería el último en nuestra cola, fue el último
                                                en agregarse a la misma.
                                            </li>
                                            <li>
                                                <b>Tamaño (opcional): </b> para
                                                poder saber el largo de nuestra
                                                cola.
                                            </li>
                                            <li>
                                                <b>Capacidad (opcional): </b>{" "}
                                                para limitar el tamaño de
                                                nuestra cola.
                                            </li>
                                        </ul>
                                        Esto lo definimos de la siguiente
                                        manera:
                                        <CodeBlock
                                            text={queueCodeBlock}
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
                                    src={"/images/class-11/Queue_.png"}
                                    width={470}
                                    height={260}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class11Slide5;
