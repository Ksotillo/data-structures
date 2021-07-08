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
        title: "Asociación",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-13/asociation.png"}
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
                    Este tipo de relación es el más común y se utiliza para
                    representar dependencia semántica. Se representa con una
                    simple linea continua que une las clases que están incluidas
                    en la asociación.
                    <br />
                    <br />
                    Un ejemplo de asociación podría ser: “Una mascota pertenece
                    a una persona”.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Herencia",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-13/herencia.png"}
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
                    Otra relación muy común en el diagrama de clases es la
                    herencia. Este tipo de relaciones permiten que una clase
                    (clase hija o subclase) reciba los atributos y métodos de
                    otra clase (clase padre o superclase). Estos atributos y
                    métodos recibidos se suman a los que la clase tiene por sí
                    misma. Se utiliza en relaciones “es un”.
                    <br />
                    <br />
                    Un ejemplo de esta relación podría ser la siguiente: Un pez,
                    un perro y un gato son animales.
                    <br />
                    <br />
                    En este ejemplo, las tres clases (Pez, Perro, Gato) podrán
                    utilizar la función respirar, ya que lo heredan de la clase
                    animal, pero solamente la clase Pez podrá nadar, la clase
                    Perro ladrar y la clase Gato maullar. La clase Animal podría
                    plantearse ser definida abstracta, aunque no es necesario.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Agregación",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-13/agregación.png"}
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
                    Es una representación jerárquica que indica a un objeto y
                    las partes que componen ese objeto. Es decir, representa
                    relaciones en las que un objeto es parte de otro, pero aun
                    así debe tener existencia en sí mismo.
                    <br />
                    <br />
                    Se representa con una línea que tiene un rombo en la parte
                    de la clase que es una agregación de la otra clase (es
                    decir, en la clase que contiene las otras).
                    <br />
                    <br />
                    Un ejemplo de esta relación podría ser: “Las mesas están
                    formadas por tablas de madera y tornillos o, dicho de otra
                    manera, los tornillos y las tablas forman parte de una
                    mesa”. Como ves, el tornillo podría formar parte de más
                    objetos, por lo que interesa especialmente su abstracción en
                    otra clase.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Composición",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-13/composicion.png"}
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
                    La composición es similar a la agregación, representa una
                    relación jerárquica entre un objeto y las partes que lo
                    componen, pero de una forma más fuerte. En este caso, los
                    elementos que forman parte no tienen sentido de existencia
                    cuando el primero no existe. Es decir, cuando el elemento
                    que contiene los otros desaparece, deben desaparecer todos
                    ya que no tienen sentido por sí mismos sino que dependen del
                    elemento que componen. Además, suelen tener los mismos
                    tiempo de vida. Los componentes no se comparten entre varios
                    elementos, esta es otra de las diferencias con la
                    agregación.
                    <br />
                    <br />
                    Se representa con una linea continua con un rombo relleno en
                    la clase que es compuesta.
                    <br />
                    <br />
                    Un ejemplo de esta relación sería: “Un vuelo de una compañía
                    aerea está compuesto por pasajeros, que es lo mismo que
                    decir que un pasajero está asignado a un vuelo”
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class13Slide7 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="¿Cómo establecer relaciones en un diagrama de clase?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class13Slide7;
