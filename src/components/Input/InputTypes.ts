import { Control } from 'react-hook-form';

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never;

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[],
];

type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : '';

/**
 * Extrai o generico do control
 */
type ExtractGeneric<P> = P extends Control<infer T> ? T : never;

/**
 * Devolve os nomes baseado no tipo do control
 * Só funciona até 3 nested levels, mas é possível definir o número de níveis alterando o 3 para o numero de níveis desejado
 */
export type Names<T> = Leaves<ExtractGeneric<T>, 3>;

export type BaseControl = Control<any, any>;
