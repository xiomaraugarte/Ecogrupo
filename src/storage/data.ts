import AsyncStorage from '@react-native-async-storage/async-storage';

export type User = {
    id: string;
    name: string;
    points: number;
};

export const INITIAL_USER: User = {
    id: '1',
    name: 'Xiomaro Castro',
    points: 0,
};

export type Friend = {
    id: string;
    name: string;
    points: number;
};

export type PointsEntry = {
    id: string;
    userId: string;
    points: number;
    date: string;
};

const USER_KEY = 'user';
const FRIENDS_KEY = 'friends';
const POINTS_LOG_KEY = 'pointsLog';

export async function loadUser(): Promise<User | null> {
    const saved = await AsyncStorage.getItem(USER_KEY);

    if (saved === null) {
        return null;
    }

    return JSON.parse(saved);
}

export async function saveUser(user: User) {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
}

export async function loadFriends(): Promise<Friend[]> {
    const saved = await AsyncStorage.getItem(FRIENDS_KEY);

    if (saved === null) {
        return [];
    }

    return JSON.parse(saved);
}

export async function saveFriends(friends: Friend[]) {
    await AsyncStorage.setItem(FRIENDS_KEY, JSON.stringify(friends));
}

export async function loadPointsLog(): Promise<PointsEntry[]> {
    const saved = await AsyncStorage.getItem(POINTS_LOG_KEY);

    if (saved === null) {
        return [];
    }

    return JSON.parse(saved);
}

export async function savePointsLog(entries: PointsEntry[]) {
    await AsyncStorage.setItem(
        POINTS_LOG_KEY,
        JSON.stringify(entries)
    );
}

export function getTodayDate() {
    const now = new Date();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    return now.getFullYear() + '-' + month + '-' + day;
}

export async function registerPoints(points: number) {
    if (!Number.isFinite(points) || points <= 0) {
        throw new Error('Los puntos deben ser un número mayor que cero.');
    }

    const user = await loadUser() ?? INITIAL_USER;

    const updatedUser: User = {
        ...user,
        points: user.points + points,
    };

    const log = await loadPointsLog();

    const newEntry: PointsEntry = {
        id: Date.now().toString(),
        userId: updatedUser.id,
        points,
        date: getTodayDate(),
    };

    await saveUser(updatedUser);
    await savePointsLog([...log, newEntry]);

    return updatedUser;
}
