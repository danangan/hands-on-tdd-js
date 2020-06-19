import StringCalculator from "./stringCalculator";

describe("StringCalculator", () => {
  describe("add", () => {
    it("should return zero given empty string", () => {
      const sut = new StringCalculator();

      const result = sut.add("");

      expect(result).toBe(0);
    });

    it("should return its input as integer given one number string", () => {
      const sut = new StringCalculator();

      const result = sut.add("1");

      expect(result).toBe(1);
    });

    it("should return the sum of its input given multiple numbers separated by comma", () => {
      const sut = new StringCalculator();

      const result = sut.add("1,2");

      expect(result).toBe(3);
    });

    it("should return the sum of its input given multiple numbers separated by comma or new line (\n)", () => {
      const sut = new StringCalculator();

      const result = sut.add("1,2\n3");

      expect(result).toBe(6);
    });

    it("should return the sum of its input given custom delimiter", () => {
      const sut = new StringCalculator();

      const result = sut.add("//;\n1;2");

      expect(result).toBe(3);
    });

    it("should throw exception it ifs input contain negative numbers", () => {
      const sut = new StringCalculator();

      expect(() => {
        const result = sut.add("-1");
      }).toThrow("negatives not allowed {-1}");
    });
  });
});
