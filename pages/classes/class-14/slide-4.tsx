import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCardContent } from "UI/Card/Card";
import ItemsSlide from "components/ItemsSlide/ItemsSlide";

// bigger_picture.jpeg
const items = [
    {
        title: "Binary Tree",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-14/binary-tree.png"}
                    width={536}
                    height={393}
                />
                <br />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    Un árbol binario es una estructura de datos de árbol en la
                    que cada nodo padre puede tener como máximo dos hijos. Cada
                    nodo de un árbol binario consta de tres elementos:
                    <motion.ul style={{ color: "#1a4551" }}>
                        <li>Dato del elemento</li>
                        <li>Apuntador al hijo izquierdo</li>
                        <li>Apuntador al hijo derecho</li>
                    </motion.ul>
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Binary Search Tree (BST)",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-14/BTS.png"}
                    width={536}
                    height={393}
                />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    El árbol de búsqueda binaria es una estructura de datos que
                    permite rápidamente nosotros para mantener una lista
                    ordenada de números.
                </motion.p>
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    style={{ color: "#1a4551" }}
                >
                    <li>
                        Se llama árbol binario porque cada nodo de árbol tiene
                        un máximo de dos hijos.
                    </li>
                    <li>
                        Se llama árbol de búsqueda porque se puede utilizar para
                        busque la presencia de un número en un tiempo de
                        O(log(n)).
                    </li>
                </motion.ul>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={3}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    Las propiedades que separan un árbol de búsqueda binario de
                    un árbol binario normal son:
                </motion.p>
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    style={{ color: "#1a4551" }}
                >
                    <li>
                        Todos los nodos del subárbol izquierdo son menores que
                        el nodo raíz
                    </li>
                    <li>
                        Todos los nodos del subárbol derecho son más que el nodo
                        raíz
                    </li>
                    <li>
                        Ambos subárboles de cada nodo también son BST, es decir,
                        tienen las dos propiedades anteriores
                    </li>
                </motion.ul>
            </GlassCardContent>
        ),
    },
    {
        title: "AVL Tree",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-14/AVL.png"}
                    width={536}
                    height={393}
                />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    Es un árbol binario de búsqueda que satisface la condición
                    de estar balanceado.
                </motion.p>
                <motion.ul
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={2}
                    style={{ color: "#1a4551" }}
                >
                    <li>
                        Por ser un Árbol Binario de Búsqueda respeta la
                        propiedad de orden en todos sus nodos, es decir, todas
                        las claves en su subárbol izquierdo son menores que la
                        clave del nodo y todas las claves en el subárbol derecho
                        son mayores.
                    </li>
                    <li>
                        La propiedad de balanceo dice que para cada nodo del
                        árbol, la diferencia de altura entre el subárbol
                        izquierdo y el subárbol derecho es a lo sumo 1
                    </li>
                </motion.ul>
            </GlassCardContent>
        ),
    },
    {
        title: "B-Tree",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-14/Btree.png"}
                    width={536}
                    height={393}
                />
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    B-tree es un tipo especial de árbol de búsqueda
                    autoequilibrado en el que cada nodo puede contener más de
                    una clave y puede tener más de dos hijos. Es una forma
                    generalizada del árbol de búsqueda binaria.
                </motion.p>
                <motion.h3
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    ¿Por qué la necesidad de un árbol B-tree?
                </motion.h3>
                <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    exit="exits"
                    custom={1}
                    transition={transition}
                    style={{ marginTop: ".5rem" }}
                >
                    La necesidad de B-tree surgió con el aumento de la necesidad
                    de menos tiempo para acceder a los medios de almacenamiento
                    físicos como un disco duro. Los dispositivos de
                    almacenamiento secundarios son más lentos y tienen una mayor
                    capacidad. Era necesario contar con este tipo de estructuras
                    de datos que minimizaran los accesos al disco.
                    <br />
                    <br />
                    Otras estructuras de datos, como un árbol de búsqueda
                    binario, un árbol avl, un árbol rojo-negro, etc., pueden
                    almacenar solo una clave en un nodo. Si tiene que almacenar
                    una gran cantidad de llaves, entonces la altura de dichos
                    árboles se vuelve muy grande y el tiempo de acceso aumenta.
                    <br />
                    <br />
                    Sin embargo, B-tree puede almacenar muchas claves en un solo
                    nodo y puede tener varios nodos secundarios. Esto disminuye
                    la altura significativamente permitiendo accesos al disco
                    más rápidos.
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class14Slide10 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="Existen varios tipos de Árboles:"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class14Slide10;
