# sagemath-docs

Simple and clear documentation for SageMath functions and operations

Main index page: http://paulmasson.github.io/sagemath-docs/index.html

List of mathematical functions native to SageMath:  
https://github.com/sagemath/sage/blob/master/src/sage/functions/all.py

Utility for parsing files in functions directory courtesy of Theo Armour @theo-armour  
http://jaanga.github.io/demo/pm/get-sage-function-names/get-sage-function-names-r2.html

## Issues

* get beta function plotting!

* binomial doesn't automatically generalize

* arccot/acot, arcsec/asec and arccsc/acsc do not evaluate exactly for special values

* ditto for a slew of hyperbolic functions

* ditto for Jacobi elliptic functions

* polylog does not evaluate numerically for negative orders

* inverse Jacobi functions have some serious numerical issues: see comments in relevant files

* inverse Jacobi functions do not recognize their own inverses

* 'unfamilar singuarlity' in Maxima expansions for bessel_K, bessel_Y, struve_H, struve_L, beta, Ei = exp_integral_ei, exp_integral_e1, exp_integral_e, cos_integral, cosh_integral, log_gamma

* 'division by zero' in SageMath `series` for exp_integral_e with order less than five

* digamma function does not evaluate exactly at origin

* Struve series expansions need work
