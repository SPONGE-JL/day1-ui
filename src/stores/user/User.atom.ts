import { atom } from "recoil";

export interface UserAtom {
  userId: number;
}

const userAtom = atom<UserAtom>({
  key: "userState",
  default: {
    userId: 1,
  },
});

export { userAtom };
