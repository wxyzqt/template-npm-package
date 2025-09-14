/**
 *
 * 角色控制类
 * @remarks
 * Role类用于管理和控制用户角色，提供添加、删除、检查角色权限等功能。
 *
 * @returns
 * Role类的当前实例
 *
 * @example
 *
 * const userRole = new Role('admin,user');
 *
 * console.log(userRole.getRoles()); // ['admin', 'user']
 *
 * consle.log(userRole.getRolesStr()); // 'admin,user'
 *
 * userRole.delRoles('admin');
 *
 * console.log(userRole.getRoles()); // ['user']
 *
 * consle.log(userRole.hasAccess('admin')); // false
 *
 * consle.log(userRole.hasAccess(['user', 'visitor'])); // true
 */
declare class Role {
    private _roles;
    /**
     * @defaultValue ["super", "admin", "dev", "user", "visitor"]
     */
    readonly _defaultRoles: string[];
    constructor(roles: string | string[]);
    /**
     * 获取角色列表,该方法用于获取当前实例的角色数组。
     */
    getRoles(): string[];
    /**
     * 获取角色字符串,该方法用于将当前实例的角色列表转换为以逗号分隔的字符串形式。
     */
    getRolesStr(): string;
    delRoles(roles: string | string[]): void;
    /**
     * 添加角色,该方法用于向当前实例的角色列表中添加新的角色，确保不会添加重复的角色。
     */
    addRoles(roles: string | string[]): void;
    /**
     *   角色权限检查,该方法用于检查当前实例的角色是否包含指定的角色。
     */
    hasAccess(roles: string | string[]): boolean;
    /**
     * 角色格式化，将字符串或字符串数组转换为字符串数组并去除首尾空格
     */
    format(roles: string | string[]): string[];
    /**
     * 清空当前实例的所有角色
     */
    setClear(): void;
}

export { Role };
