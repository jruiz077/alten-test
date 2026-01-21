import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import PathResult from "./PathResult.vue";

describe("PathResult.vue", () => {
  describe("when error prop is provided", () => {
    it("should display error message", () => {
      const wrapper = mount(PathResult, {
        props: {
          path: null,
          error: "Category not found",
        },
      });

      expect(wrapper.find(".error").exists()).toBe(true);
      expect(wrapper.find("h2").text()).toBe("No path found");
      expect(wrapper.find(".error p").text()).toBe("Category not found");
    });

    it("should not display success or placeholder when error exists", () => {
      const wrapper = mount(PathResult, {
        props: {
          path: null,
          error: "Some error",
        },
      });

      expect(wrapper.find(".success").exists()).toBe(false);
      expect(wrapper.find(".placeholder").exists()).toBe(false);
    });

    it("should display the path result", () => {
      const wrapper = mount(PathResult, {
        props: {
          path: "/category1/category2",
        },
      });

      expect(wrapper.find(".success").exists()).toBe(true);
      expect(wrapper.find("h2").text()).toBe("Path Result");
      expect(wrapper.find("code").text()).toBe("/category1/category2");
    });

    it("when neither path nor error is provided should display placeholder message", () => {
      const wrapper = mount(PathResult, {
        props: {
          path: null,
        },
      });

      expect(wrapper.find(".placeholder").exists()).toBe(true);
      expect(wrapper.find(".placeholder p").text()).toBe(
        "Enter a category name and click Calculate to see the path.",
      );
    });
  });
});
