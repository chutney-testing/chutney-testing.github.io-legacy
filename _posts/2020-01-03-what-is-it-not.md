---
layout: post
title: What is it not?
---

__Chutney is not a replacement for tools like Cucumber, etc.__

While having some overlap, they all fill different test aspect.

The key difference is the absence of glue and support code.

While we think that having glue code is cumbersome and adds unnecessary levels of indirection between the features and the system under test,
especially for high level tests and distributed softwares.

We also do think that using Cucumber for low level testing is sometimes very handy and useful, 
thanks to the high level of expression provided by Gherkin (and this is part of the Testing Iceberg Seb Rose talked about).


__Chutney is no silver-bullet, it is just a tool which promotes and supports one way of doing software testing.__

As such, to benefit from it, we highly advise you to be proficient or to document yourself about 
Behaviour-Driven-Development (by Dan North), Specification by Example (by Gojko Adzic) and Living Documentation (by Cyrille Martraire).
All of which, however you call it, define the same practices and share the same goals.  

Global understanding of Test Driven Development and knowledge about Ubiquitous Language (from Domain Driven Design, by Eric Evans) 
is also valuable.