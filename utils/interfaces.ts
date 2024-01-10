export interface iUser {
  name: string;
  presentTime: string;
  signInTime: string;
  role: string;
}

export interface iUserData extends iUser, Document {}
