import { Languages } from '../../contexts/translation';
import { texts } from '../../utils/configuration-management';

export const getListLength = (language: Languages, module: string) => {
  const list = texts[language][module];
  return Object.keys(list).length - 1;
};
