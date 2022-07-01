import { Athendance } from "./athendance";

export interface User {
    id?: string;
    nickname: string;
    fullname: string;
    athendance?: number;
    athendanceList?: Athendance[];
}
