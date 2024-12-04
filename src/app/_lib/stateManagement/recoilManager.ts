// recoilHelpers.ts
import { RecoilState, useRecoilValue, useSetRecoilState } from "recoil";

// Function to get data from Recoil using the atom
export function useGetRecoilData<T>(atom: RecoilState<T>): T {
  return useRecoilValue(atom);
}

// // Function to set data into Recoil using the atom
// export function useSetRecoilData<T>(atom: RecoilState<T>, data: T) {
//   const setRecoilState = useSetRecoilState(atom);
//   setRecoilState(data);
// }

// Function to return a setter function for Recoil state
export function useSetRecoilData<T>(atom: RecoilState<T>): (data: T) => void {
  const setRecoilState = useSetRecoilState(atom); // Valid usage of a hook
  return (data: T) => setRecoilState(data); // Return a setter function
}
