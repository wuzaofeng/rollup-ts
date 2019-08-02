export let bool: boolean = false;

export enum Color {Red, Green, Blue}

export function error(message: string): never {
  throw new Error(message);
}
