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
class Map<K, V>  {
    LinkedList<HashNode<K, V> > bucketArray;
    int capacity;
    int size;
    // Constructores
    public Map(){
        bucketArray = new ArrayList<>();
        capacity = 10;
        size = 0;
        // Creamos nuestros buckets vacios
        for (int i = 0; i < capacity; i++)
            bucketArray.add(null);
    }
}
`;

const Class12Slide13 = () => {
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
                            <H1 shadow>Anatomía de una Hash Table</H1>
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
                                        para una Hash Table:
                                        <ul>
                                            <li>
                                                <b>BucketArray: </b> la lista
                                                que contendra todas las
                                                referencias a cada una de las
                                                cadenas que se irán construyendo
                                            </li>
                                            <li>
                                                <b>Capacity: </b> será la
                                                capacidad o el tamaño máximo de
                                                nuestra Hash Table.
                                            </li>
                                            <li>
                                                <b>Tamaño (opcional): </b> para
                                                poder saber el largo de nuestra
                                                Hash Table.
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
                                    src={"/images/class-12/hash-table.png"}
                                    width={538}
                                    height={482}
                                />
                            </RoundedImageContainer>
                        </motion.div>
                    </Box>
                </Col>
            </Row>
        </Container>
    );
};
export default Class12Slide13;
