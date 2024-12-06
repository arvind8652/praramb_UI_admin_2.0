// atoms.ts
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

// Enabling persistence
const { persistAtom } = recoilPersist({
  key: "myAppStorage", // Custom storage key
  storage: sessionStorage, // Use sessionStorage or another storage if needed
});

// Debugging effects
const debugEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    setSelf((value: any) => {
      console.log(`${key} atom initialized with value:`, value);
      return value;
    });
    onSet((newValue: any, oldValue: any) => {
      console.log(`${key} atom changed from`, oldValue, "to", newValue);
    });
  };

// Define your atoms
export const customerDetail = atom({
  key: "customerDetail", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom, debugEffect("customerDetail")], // persist the atom data
});

export const brandDetail = atom({
  key: "brandDetail", // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom, debugEffect("brandDetail")], // persist the atom data
});

export const themeState = atom({
  key: "themeState",
  default: "dark",
  effects_UNSTABLE: [persistAtom, debugEffect("themeState")],
});
