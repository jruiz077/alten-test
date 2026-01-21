import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import PathResult from "@/components/PathResult.vue";

// Mock constants
const mockCategories = [{ name: "test", subcategories: [] }];
vi.stubGlobal("DEFAULT_CATEGORIES", mockCategories);

vi.mock("@/utils/constants", () => ({
  DEFAULT_CATEGORIES: mockCategories,
}));

vi.mock("@/utils/pathCalculator", () => ({
  getCategoryPath: vi.fn(),
}));

const Index = await import("./index.vue").then((m) => m.default);

const mountComponent = () => {
  return mount(Index, {
    global: {
      components: { PathResult },
    },
  });
};

describe("index.vue", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the main elements", () => {
    const wrapper = mountComponent();

    expect(wrapper.find("h1").text()).toContain("Alten");
    expect(wrapper.find("textarea").exists()).toBe(true);
    expect(wrapper.find("button").text()).toBe("Get Path");
  });

  it("should calculate path when button is clicked", async () => {
    const { getCategoryPath } = await import("@/utils/pathCalculator");
    vi.mocked(getCategoryPath).mockReturnValue("/category1/category2");

    const wrapper = mountComponent();

    await wrapper.find("input[type='text']").setValue("category2");
    await wrapper.find("button").trigger("click");

    expect(getCategoryPath).toHaveBeenCalled();
  });

  it("should show error for invalid JSON", async () => {
    const wrapper = mountComponent();

    await wrapper.find("textarea").setValue("invalid json");
    await wrapper.find("input[type='text']").setValue("test");
    await wrapper.find("button").trigger("click");
    await wrapper.vm.$nextTick();

    const pathResult = wrapper.findComponent(PathResult);
    expect(pathResult.props("error")).toBeTruthy();
  });
});
