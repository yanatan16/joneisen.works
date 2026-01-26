---
layout: home
title: Resume
permalink: /resume
---

<div class="print-only print-header">
  This resume looks better on https://joneisen.works/resume
</div>

<div class="resume-page" markdown="1">

# Jon Eisen

### Staff Software Engineer and Technical Lead

I love to build useful software. I'm an experienced polyglot generalist programmer who has built everything from high performance embedded systems to high scalability distributed systems, working solo and leading cross-functional teams across many industries.

For the past decade, I've focused on data engineering. My guiding principle is that we must understand what the data represents at a low level to understand what it's implying at a high level.

Functional programming is my preferred style. Defensive design, exhaustive testing, extensive automation, and self-documenting APIs are all habits of mine. I think a programmer's greatest skill is writing readable code.

## Work History

{% for period in site.data.work-history.periods %}
  {% include resume-period.html period=period %}
{% endfor %}

## Education

<div class="education-section">
{% for degree in site.data.education.degrees %}
  {% include education-item.html degree=degree %}
{% endfor %}
</div>

</div>
