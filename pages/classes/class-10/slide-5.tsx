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

const stackCodeBlock = `
class Stack  {
    Node head;
    int length;
    // Constructores
    public Stack(){
        this.head = null;
    }
    public Stack(Node n){
        this.head = n;
    }
}
`;

const Class10Slide5 = () => {
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
                            <H1 shadow>Anatomía de una Pila</H1>
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
                                        para una Pila:
                                        <ul>
                                            <li>
                                                <b>Top: </b> el fundamental, ya que con
                                                este es que accedemos al tope de nuestra pila.
                                            </li>
                                            <li>
                                                <b>Bottom (opcional): </b> Sería el fondo
                                                de nuestra pila, lo que sería nuestro primer valor
                                                que agregamos.
                                            </li>
                                            <li>
                                                <b>Tamaño (opcional): </b> para
                                                poder saber el largo de nuestra
                                                pila.
                                            </li>
                                            <li>
                                                <b>Capacidad (opcional): </b> para limitar
                                                el tamaño de nuestra pila.
                                            </li>
                                        </ul>
                                        Esto lo definimos de la siguiente manera:
                                        <CodeBlock
                                            text={stackCodeBlock}
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
                                        "/images/class-10/Stack.png"
                                    }
                                    width={368}
                                    height={514}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class10Slide5;
