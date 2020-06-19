export default class StringCalculator {
  add(string) {
    if (string === "") {
      return 0;
    }

    const defaultDelimiters = ["\n"];

    if (string.includes("//")) {
      const stringWithoutDoubleSlash = string.substring(2);

      const [delimiter, stringTarget] = stringWithoutDoubleSlash.split("\n");

      defaultDelimiters.push(delimiter);

      string = stringTarget;
    }

    defaultDelimiters.forEach((delimiter) => {
      string = string.split(delimiter).join(",");
    });

    return string.split(",").reduce((acc, number) => {
      const numberInInt = Number.parseInt(number);

      if (numberInInt < 0) {
        throw Error(`negatives not allowed {${numberInInt}}`);
      }

      return acc + numberInInt;
    }, 0);
  }
}
