---
layout: single
title: Guilherme Novais | Desenvolvedor de Software
description: Portfólio profissional de Guilherme Novais, desenvolvedor backend com experiência em aplicações Java, sistemas distribuídos e plataformas financeiras.
permalink: /
locale: pt-BR
author_profile: false
---

{% assign content = site.data.portfolio["pt-BR"] %}
{% assign profile = content.profile %}

{{ profile.summary | markdownify }}

<p class="profile-contact">
  <a href="mailto:{{ profile.email }}">{{ profile.email }}</a> ·
  <a href="tel:{{ profile.phone | remove: '+' | remove: ' ' }}">{{ profile.phone }}</a> ·
  <a href="{{ profile.links.linkedin }}">LinkedIn</a> ·
  <a href="{{ profile.links.website }}">Site</a>
</p>

## Experiência profissional {#experiencia-profissional}

{% for experience in content.experience %}
<article class="portfolio-experience">
  <h3>{{ experience.role }}</h3>
  <p><strong>{{ experience.company }}</strong> ·
    {% if experience.period %}<time>{{ experience.period }}</time>
    {% else %}{% for period in experience.periods %}<time>{{ period }}</time>{% unless forloop.last %}; {% endunless %}{% endfor %}{% endif %}
  </p>
  <ul>
    {% for item in experience.highlights %}<li>{{ item }}</li>{% endfor %}
  </ul>
</article>
{% endfor %}

## Educação {#educacao}

{% for education in content.education %}
<article itemscope itemtype="https://schema.org/EducationalOccupationalCredential">
  <h3 itemprop="credentialCategory">{{ education.degree }}</h3>
  <p><span itemprop="recognizedBy">{{ education.institution }}</span> · <time>{{ education.period }}</time></p>
</article>
{% endfor %}

## Certificações {#certificacoes}

{% for certification in content.certifications %}
<article itemscope itemtype="https://schema.org/EducationalOccupationalCredential">
  <h3 itemprop="name">{{ certification.name }}</h3>
  <p><time>{{ certification.period }}</time></p>
</article>
{% endfor %}

## Habilidades técnicas {#habilidades-tecnicas}

{% for group in content.skills %}
### {{ group.category }}

<ul class="skill-list">
  {% for skill in group.items %}<li>{{ skill }}</li>{% endfor %}
</ul>

{% endfor %}
