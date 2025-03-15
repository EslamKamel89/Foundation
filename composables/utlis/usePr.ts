export default function usePr() {
  const pr = <T>(value: T, title: string | null = null) => {
    console.log("_/\\_".repeat(3) + title + "_/\\_".repeat(3));
    console.log(value);
    return value;
  };
  return { pr };
}
