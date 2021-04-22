import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { variants, transition } from "utils/motionVariants";
import { useSlideAnimationControls } from "hooks/useAnimationControls";
import { GlassCardContent } from "UI/Card/Card";
import ItemsSlide from "components/ItemsSlide/ItemsSlide";
import { CodeBlock, dracula } from "react-code-blocks";

const inheritanceCodeBlock = `
class Person:
  def __init__(self, fname, lname):
    self.firstname = fname
    self.lastname = lname

  def printname(self):
    print(self.firstname, self.lastname)

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)

x = Student("Mike", "Olsen")
x.printname()

`;

const encapsulationCodeBlock = `
class Person:
  def __init__(self, fname, lname, password):
    self.firstname = fname
    self.lastname = lname
    self._password = password

  def printname(self):
    print(self.firstname, self.lastname)

  def showPassword(self):
    print(self._password)

class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)

x = Student("Mike", "Olsen")
x.printname()

`;

const abstractionCodeBlock = `
from abc import ABC
class Shape(ABC): #abstract class
  def calculate_area(self): #abstract methodpass

class Rectangle(Shape):
  length = 5
  breadth = 3
  
  def calculate_area(self):
    return self.length * self.breadth

class Circle(Shape):
  radius = 4
  def calculate_area(self):
    return 3.14 * self.radius * self.radius

`;

const polymorphismCodeBlock = `
class India():
     def capital(self):
       print("New Delhi")
 
     def language(self):
       print("Hindi and English")
 
class USA():
     def capital(self):
       print("Washington, D.C.")
 
     def language(self):
       print("English")
 
obj_ind = India()
obj_usa = USA()
for country in (obj_ind, obj_usa):
    country.capital()
    country.language()

`;
// bigger_picture.jpeg
const items = [
    {
        title: "Una imagen más amplia",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-2/bigger_picture.jpeg"}
                    width={590}
                    height={374}
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
                    En la actualidad, las rutas de los lenguajes de programación
                    son vastos, variados y complejos. Por lo general, un
                    lenguaje de programación solo cubre una pequeña parte del
                    panorama de los lenguajes de programación. Hay una famosa
                    historia de hombres ciegos que tocan solo una parte de un
                    elefante e interpretan al elefante a su manera, por ejemplo,
                    alguien toca la cola del elefante e interpreta al elefante
                    como una cuerda. Lo mismo ocurre con los lenguajes de
                    programación.
                    <br />
                    <br />
                    Aprender un nuevo lenguaje de programación te dará una
                    visión más amplia de los lenguajes de programación. Como
                    cualquier otro dominio, tener una imagen más amplia a menudo
                    es útil y te brinda una ventaja adicional.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Adaptarse o morir",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-2/adaptation.jpeg"}
                    width={875}
                    height={566}
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
                    En los viejos tiempos felices (el siglo pasado), la vida de
                    un desarrollador fue bastante simple. En aquellos días,
                    podrías haber aprendido un lenguaje de programación
                    convencional y que eso funcionara para el resto de su vida.
                    <br />
                    <br />
                    Pero en la actualidad, la vida de un desarrollador de
                    software es más dinámica. Con el auge de los microservicios,
                    la programación políglota es una norma ahora más bien
                    excepciones.
                    <br />
                    <br />
                    Es posible que deba aprender un nuevo lenguaje de
                    programación en su trabajo o proyecto. El cerebro humano es
                    excelente en el aprendizaje por transferencia. Si ya conoces
                    Haskell / Scala, puedes aprender otras funciones lenguajes
                    de programación rápido. Si aprende uno de los lenguajes de
                    programación modernos,por ejemplo, Kotlin, entonces puedes
                    aprender otros lenguajes modernos similares (por ejemplo,
                    TypeScript) rápidamente.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Mayor cantidad de herramientas",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-2/bigger_toolbox.jpeg"}
                    width={590}
                    height={374}
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
                    Si solo se sabe cómo ejecutar una herramienta, por ejemplo,
                    un martillo, entonces intentarás usar el martillo en todos
                    los escenarios en los que no sea la herramienta adecuada. Lo
                    mismo ocurre con los desarrolladores de software.
                    <br />
                    <br />
                    Como seres humanos, todos queremos permanecer dentro de
                    nuestra zona de comodidad. Como resultado, queremos ceñirnos
                    a la programación idiomas que ya conocemos y queremos
                    usarlos en todo lugar. Hay muchos desarrolladores que solo
                    conocen a uno lenguaje de programación (por ejemplo, Java o
                    JavaScript) e intentan utilizarlos en todos los casos de
                    uso.
                    <br />
                    <br />
                    Aprender un nuevo lenguaje de programación mejorará tu
                    conjunto de herramientas y te ayudará a convertirte en un
                    mejor desarrollador.
                </motion.p>
            </GlassCardContent>
        ),
    },
    {
        title: "Desarrollo de tu carrera",
        Component: () => (
            <GlassCardContent>
                <Image
                    src={"/images/class-2/career-development.jpeg"}
                    width={725}
                    height={400}
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
                    Si desea ascender en tu carrera profesional, es decir, si
                    desea ser arquitecto de software o arquitecto de soluciones,
                    no solo debe tener una experiencia más profunda, sino
                    también una experiencia más amplia. En el rol de arquitecto
                    de software, debe tomar decisiones de diseño sobre todo el
                    panorama y no sobre temas específicos.
                    <br />
                    <br />
                    Antes existian los arquitectos de "Ivory Tower", que podían
                    diseñar la Arquitectura de Software para un proyecto sin
                    conocer la programación práctica. Pero esto ha ido
                    cambiando, las empresas buscan cada vez más arquitectos de
                    software que puedan programar.
                    <br />
                    <br />
                    Si eres un arquitecto de software que puede programar en
                    varios lenguajes de programación y puede hablar con los
                    desarrolladores, los desarrolladores te mostrarán más
                    respeto.
                    <br />
                    <br />
                    Realmente el camino hacia convertirse en un arquitecto de
                    Software o arquitecto de soluciones necesitará de muchas
                    otras habiliaddes, pero aprender un nuevo lenguage de
                    programación fácilmente te ayudará si quieres ser un
                    aquitecto de software/soluciones
                </motion.p>
            </GlassCardContent>
        ),
    },
];

const Class1Slide6 = () => {
    const controls = useSlideAnimationControls();
    return (
        <ItemsSlide
            title="¿Por qué aprender un nuevo lenguage de programación es una ventaja?"
            items={items}
            controls={controls}
            transition={transition}
            variants={variants}
            whiteStyleForCards
        />
    );
};

export default Class1Slide6;
