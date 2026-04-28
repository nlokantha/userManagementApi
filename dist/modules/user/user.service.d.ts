type userInfo = {
    name: string;
    email: string;
};
export declare const userService: {
    createUser(data: userInfo): Promise<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
    }>;
    getUserById(id: string): Promise<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
    }>;
    getUsers(page: number, limit: number, email?: string): Promise<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
    }[]>;
    updateUser(id: string, data: userInfo): Promise<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
    }>;
    deleteUser(id: string): Promise<{
        name: string;
        id: string;
        email: string;
        createdAt: Date;
    }>;
};
export {};
//# sourceMappingURL=user.service.d.ts.map