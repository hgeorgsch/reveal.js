This fork of reveal.js is adapted for personal use.  Feel free to use it.
For most general use, please refer to the Hakimel's original documentation
below.

The main features of this fork are

- own CSS styles with NTNU logo. 
- setup to build HTML files from jade, using grunt.
- example of off-line voice synthesising

# Caveats

+ The voice synthesiser does badly on long sentences, making pauses
  where there should be none.
  This is seen on the quote from Simon in the demo slides.

# How to use the special features 

1. Own CSS styles are found under src/css, they may be modified.
2. Jade templates are found under src/jade.  The presentation is
   built from index.jade which should be modified to hold your presentation.
3. Install necessary tools: `npm i`
4. Compile the jade code: `grunt`
5. The sync.sh script is used to copy necessary files to a web server
   or other location.  Usage: `sh sync.sh INSDIR`

<p align="center">
  <a href="https://revealjs.com">
  <img src="https://hakim-static.s3.amazonaws.com/reveal-js/logo/v1/reveal-black-text-sticker.png" alt="reveal.js" width="500">
  </a>
  <br><br>
  <a href="https://github.com/hakimel/reveal.js/actions"><img src="https://github.com/hakimel/reveal.js/workflows/tests/badge.svg"></a>
  <a href="https://slides.com/"><img src="https://s3.amazonaws.com/static.slid.es/images/slides-github-banner-320x40.png?1" alt="Slides" width="160" height="20"></a>
</p>

reveal.js is an open source HTML presentation framework. It enables anyone with a web browser to create beautiful presentations for free. Check out the live demo at [revealjs.com](https://revealjs.com/).

The framework comes with a powerful feature set including [nested slides](https://revealjs.com/vertical-slides/), [Markdown support](https://revealjs.com/markdown/), [Auto-Animate](https://revealjs.com/auto-animate/), [PDF export](https://revealjs.com/pdf-export/), [speaker notes](https://revealjs.com/speaker-view/), [LaTeX typesetting](https://revealjs.com/math/), [syntax highlighted code](https://revealjs.com/code/) and an [extensive API](https://revealjs.com/api/).

# Cloning as a subtree

It is often useful to keep many slide sets in a single repository.
The following commands clones reveal.js as a git subtree:
```bash
git remote add revealjs git@github.com:hgeorgsch/reveal.js
git subtree add --prefix subdir revealjs master --squash
```

To pull upstream changes, we can similarly do
```bash
git subtree pull --prefix subdir revealjs master --squash
```

---

Want to create reveal.js presentation in a graphical editor? Try <https://slides.com>. It's made by the same people behind reveal.js.

---

### Sponsors

Hakim's open source work is supported by <a href="https://github.com/sponsors/hakimel">GitHub sponsors</a>. Special thanks to:
<div align="center">
  <table>
    <td align="center">
      <a href="https://workos.com/?utm_campaign=github_repo&utm_medium=referral&utm_content=revealjs&utm_source=github">
        <div>
          <img src="https://user-images.githubusercontent.com/629429/151508669-efb4c3b3-8fe3-45eb-8e47-e9510b5f0af1.svg" width="290" alt="WorkOS">
        </div>
        <b>Your app, enterprise-ready.</b>
        <div>
          <sub>Start selling to enterprise customers with just a few lines of code. Add Single Sign-On (and more) in minutes instead of months.</sup>
        </div>
      </a>
    </td>
  </table>
</div>

---

### Getting started

- 🚀 [Install reveal.js](https://revealjs.com/installation)
- 👀 [View the demo presentation](https://revealjs.com/demo)
- 📖 [Read the documentation](https://revealjs.com/markup/)
- 🖌 [Try the visual editor for reveal.js at Slides.com](https://slides.com/)
- 🎬 [Watch the reveal.js video course (paid)](https://revealjs.com/course)

--- 
<div align="center">
  MIT licensed | Copyright © 2011-2024 Hakim El Hattab, https://hakim.se
</div>
