# sagemath-docs

Simple and clear documentation for SageMath functions and operations

Main index page: http://paulmasson.github.io/sagemath-docs/index.html

List of mathematical functions native to SageMath:  
https://github.com/sagemath/sage/blob/master/src/sage/functions/all.py

Utility for parsing files in functions directory courtesy of Theo Armour @theo-armour  
http://jaanga.github.io/demo/pm/get-sage-function-names/get-sage-function-names-r2.html

## Issues

* arctan2 has a couple wrong exact values

* arccot/acot, arcsec/asec and arccsc/acsc do not evaluate exactly for special values

* ditto for a slew of hyperbolic functions

* ditto for Jacobi elliptic functions

* polylog does not evaluate numerically for negative orders

* inverse Jacobi functions have some serious numerical issues: see comments in relevant files

* inverse Jacobi functions do not recognize their own inverses
