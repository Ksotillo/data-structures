import { Container, Row } from "styled-bootstrap-grid";

import styled from "styled-components";
import { AnimationControls, motion, Transition, Variants } from "framer-motion";

interface TitleSlide {
    title: string;
    titleSize?: string;
    controls: AnimationControls;
    variants: Variants;
    transition: Transition;
}

const TitleSlide = ({
    title,
    titleSize,
    controls,
    variants,
    transition,
}: TitleSlide) => {
    return (
        <Container>
            <Row>
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    custom={0}
                    transition={transition}
                >
                    <Title titleSize={titleSize}>{title}</Title>
                </motion.div>
            </Row>
        </Container>
    );
};

const Title = styled.h1<{ titleSize: string }>`
    font-size: ${({ titleSize }) => titleSize || "7rem"};
    text-shadow: ${(props) => props.theme.textShadow};
    text-align: center;
`;

export default TitleSlide;
