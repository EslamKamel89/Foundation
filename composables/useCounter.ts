export default function useCounter() {
  return useState("counter", () => 0);
}
