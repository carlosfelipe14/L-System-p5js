# L-systems

In 1968, Hungarian botanist Aristid Lindenmayer developed a grammar-based system to model the growth patterns of plants.

This technique can be used to generate the recursive fractal patterns.

An L-system has three main components:
- __Alphabet__: An L-system’s alphabet comprises the valid characters that can be included.
- __Axiom__: The axiom is a sentence (created with characters from the alphabet) that describes the initial state of the system.
- __Rules__: The production rules of an L-system describe ways of transforming the sentence. Consta de un _predecesor_ y _sucesor_.

El proceso de aplicar las reglas sucesivamente se denomina **generación**.

- La **Generación-0** es el axioma.
- Las subsiguientes **Generaciones** resultan de aplicar las reglas a la generación anterior.

Un  ejemplo simple, consideremos:

```
Alphabet	A, B
Axiom	    A
Rules	    A → AB
            B → A

Generación:
G-0     A
G-1     AB
G-2     ABA
G-3     ABAAB
...
```

----------------------------------------------------------------
How Lindenmayer was able to translate strings of characters into the organic structures of plants.

Consideremos el alfabeto: `F, G, +, –, [ and ]`
donde, 
 `F`	Draw a line and move forward.
 G	 Move forward (without drawing a line).
 `+`	Turn right.
 `–`	Turn left.
 `[`	Save current state.
 `]`	Restore current state.
    
This type of drawing framework is often referred to as __turtle graphics__

Ejemplo:

```
- Alphabet	F, G, +, –, [, ]
- Axiom	    F
- Rules	    F → FF+[+F–F–F]–[–F+F+F]
```

Aplicando 4 generaciones, resulta:

![example-lsystem](example-lsystem.png)

## Reference

Se tomó como referencia el e-book: https://natureofcode.com/fractals/#l-systems

## Developer

- **Author**: *Carlos Ramos*
- **Linkedin**: https://www.linkedin.com/in/carlosramos05/
- **GitHub**: https://github.com/carlosfelipe14
