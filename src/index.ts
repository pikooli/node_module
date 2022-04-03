export type VariableType = {
  any: any;
};

export default function test(variableTest: VariableType) {
  // variableTest.any this work
  console.log(variableTest, "Test in ts");
}
