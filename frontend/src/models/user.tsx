export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  location: string;
  avatarUrl: string;
  bio: string;
  hashedRefreshToken: string;
  followers: string[];
  following: string[];
  role: string;
}
