import { useState } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

import styled from "styled-components";
import {  H1,  } from "UI/Typography/Typography";
import { motion, AnimatePresence, AnimationControls, Transition, Variants } from "framer-motion";
import { Box } from "UI/Box/Box";
import { GlassCard } from "UI/Card/Card";

interface ItemsSlideProps {
    title: string;
    items: {
        title: string;
        Component: () => JSX.Element;
    }[];
    controls: AnimationControls;
    variants: Variants;
    transition: Transition;
    whiteStyleForCards?: boolean;
}

const ItemsSlide = ({
    title,
    items,
    controls,
    variants,
    transition,
    whiteStyleForCards,
}: ItemsSlideProps) => {
    const [itemSelected, setItemSelected] = useState(null);
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
                    <H1 shadow fontSize={"3rem"}>
                        {title}
                    </H1>
                </motion.div>
                <Col col={6}>
                    {items.map((item, index) => (
                        <motion.div
                            initial="hidden"
                            animate={controls}
                            variants={variants}
                            custom={index + 2}
                            transition={transition}
                        >
                            <WhiteBox
                                tabIndex={0}
                                className={
                                    item === itemSelected ? "selected" : ""
                                }
                                onClick={() => setItemSelected(item)}
                            >
                                {/* onBlur={() => item === itemSelected ? setItemSelected(null) : ''} */}
                                <ColoredTextOnHover p={3}>
                                    {`${index + 1}. ${item.title}`}
                                </ColoredTextOnHover>
                            </WhiteBox>
                        </motion.div>
                    ))}
                </Col>
                <Col col={6}>
                    <AnimatePresence>
                        {itemSelected && (
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                exit="exits"
                                custom={1}
                                transition={transition}
                            >
                                <GlassCard whiteStyle={whiteStyleForCards}>
                                    <itemSelected.Component />
                                </GlassCard>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Col>
            </Row>
        </Container>
    );
};

const ColoredTextOnHover = styled(Box)`
    text-shadow: ${({ shadow, theme }) => (shadow ? theme.textShadow : null)};
    font-size: 1.5rem;
    font-weight: bold;
`;

const WhiteBox = styled(Box)`
    width: fit-content;
    border-radius: 5px;
    transition: ${({ theme }) => theme.transition};
    transform: scale(1);
    font-weight: bold;
    margin: 1rem;
    cursor: pointer;
    outline: none;

    &:hover,
    &.selected {
        background-color: white;
        box-shadow: ${({ theme }) => theme.boxShadow};
        transition: ${({ theme }) => theme.transition};
        transform: scale(1.05);

        ${ColoredTextOnHover} {
            background: linear-gradient(
                90deg,
                ${({ theme }) => theme.gradientColors.gradientColor1} 0%,
                ${({ theme }) => theme.gradientColors.gradientColor2} 33%,
                ${({ theme }) => theme.gradientColors.gradientColor3} 66%,
                ${({ theme }) => theme.gradientColors.gradientColor4} 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: GradientAnimator 7s ease infinite;
            background-size: 400% 400%;
        }
    }
`;

export default ItemsSlide;
