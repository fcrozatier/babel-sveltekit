export function hello(name?: { value?: string[] }) {
  return `Hey ${name?.value?.at(-1) ?? "Bob"}`;
}
