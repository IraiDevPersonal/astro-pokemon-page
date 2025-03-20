export function $<T extends HTMLElement = HTMLElement>(value: string) {
  return document.querySelector(value) as T;
}
