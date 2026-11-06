import { render } from "@testing-library/react";
import { createInnerSliderWrapper } from "./testUtils";

const slides = (container) => Array.from(container.querySelectorAll(".slick-slide"));

describe("hidden slides", () => {
  test("are inert so their controls are skipped by the keyboard", () => {
    const container = createInnerSliderWrapper({
      noOfSlides: 5,
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
      speed: 0
    });

    expect(container.querySelectorAll(".slick-cloned").length).toBeGreaterThan(0);
    slides(container).forEach((slide) => {
      const hidden = slide.getAttribute("aria-hidden") === "true";
      expect(slide.hasAttribute("inert")).toBe(hidden);
    });
    expect(container.querySelectorAll(".slick-slide:not([inert])")).toHaveLength(2);
  });

  test("are inert without clones too", () => {
    const container = createInnerSliderWrapper({
      noOfSlides: 3,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      speed: 0
    });

    expect(container.querySelectorAll(".slick-slide:not([inert])")).toHaveLength(1);
  });
});
