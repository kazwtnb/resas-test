import { isEqual, pick } from 'lodash-es';

export const isEqualObjectByKey = <T>(
  obj1: T,
  obj2: T,
  idKey?: string
): boolean =>
    idKey
      ? isEqual(pick(obj1, [idKey]), pick(obj2, [idKey]))
      : isEqual(obj1, obj2);
