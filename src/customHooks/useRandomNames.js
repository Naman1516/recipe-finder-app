import { recipieNames } from '../utilities/recipieNames';

const useRandomNames = () => {
  return recipieNames[Math.floor(Math.random() * recipieNames.length)];
}

export default useRandomNames;