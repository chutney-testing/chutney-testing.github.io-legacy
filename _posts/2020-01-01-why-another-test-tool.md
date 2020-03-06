---
layout: post
title: Why another test tool ?
---

Chutney was inspired by Seb Rose blog post in which he revised the test pyramid according to test readability 
[The Testing Iceberg](http://claysnow.co.uk/the-testing-iceberg/)

Chutney is not exactly what Seb Rose meant by using this metaphore.

But we envisioned a tool allowing multiple levels of readability, providing a single place for business people, 
testers and developers to co-create, share and execute acceptance tests.

Moreover, we needed to :
* Promote and support Specification by Example across multiple teams and offices
* Ease collaboration and shared understanding in a "not so agile" environment
* Provide a single source of truth without hiding details in tests _glue code_
* Ease the automation of thousands of manual tests without writing and maintaining specific code
* Automate end-to-end tests of distributed software across secured networks, including hardware over telco networks 