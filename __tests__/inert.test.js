import React from "react";
import { render } from "@testing-library/react";
import { InnerSlider } from "../src/inner-slider";
import defaultProps from "../src/default-props";
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

  test("leave the visible slides with the inert of their own element", () => {
    const { container } = render(
      <InnerSlider {...defaultProps} speed={0} infinite={false}>
        <div inert>
          <button type="button">first</button>
        </div>
        <div>
          <button type="button">second</button>
        </div>
      </InnerSlider>
    );

    const [first, second] = slides(container);
    expect(first.getAttribute("aria-hidden")).toBe("false");
    expect(first.hasAttribute("inert")).toBe(true);
    expect(second.hasAttribute("inert")).toBe(true);
  });
});
