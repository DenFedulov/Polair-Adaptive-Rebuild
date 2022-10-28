"use strict";

class HeaderController {
  constructor() {
    this.header = document.querySelector("header");
    this.headerPlaceholder = document.querySelector(".header-placeholder");
    this.headerUp = document.querySelector(".header-up");

    this.notAtTop = false;

    this.init();
  }

  init() {
    window.addEventListener("scroll", () => {
      if (this.headerUp.offsetHeight < window.scrollY) {
        this.notAtTop = true;
      } else {
        this.notAtTop = false;
      }
      this.toggleHeader();
    });
  }

  toggleHeader() {
    this.header.classList.toggle("not-at-top", this.notAtTop);
    this.headerPlaceholder.classList.toggle("not-at-top", this.notAtTop);
  }
}

new HeaderController();
