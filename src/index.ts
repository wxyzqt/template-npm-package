import { isFalsy } from "utility-types";

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
export class Role {
  private _roles: string[] = [];

  /**
   * @defaultValue ["super", "admin", "dev", "user", "visitor"]
   */
  readonly _defaultRoles = ["super", "admin", "dev", "user", "visitor"];

  constructor(roles: string | string[]) {
    if (isFalsy(roles)) {
      roles = this._defaultRoles;
    }

    this._roles = this.format(roles);
  }

  /**
   * 获取角色列表,该方法用于获取当前实例的角色数组。
   */
  getRoles() {
    return this._roles;
  }

  /**
   * 获取角色字符串,该方法用于将当前实例的角色列表转换为以逗号分隔的字符串形式。
   */
  getRolesStr() {
    return this._roles.join(",");
  }

  delRoles(roles: string | string[]): void {
    const formatRoles = this.format(roles);
    this._roles = this._roles.filter((role) => !formatRoles.includes(role));
  }

  /**
   * 添加角色,该方法用于向当前实例的角色列表中添加新的角色，确保不会添加重复的角色。
   */
  addRoles(roles: string | string[]): void {
    const formatRoles = this.format(roles);
    this._roles = Array.from(new Set([...this._roles, ...formatRoles]));
  }

  /**
   *   角色权限检查,该方法用于检查当前实例的角色是否包含指定的角色。
   */
  hasAccess(roles: string | string[]): boolean {
    const formatRoles = this.format(roles);
    return this._roles.some((role) => formatRoles.includes(role));
  }

  /**
   * 角色格式化，将字符串或字符串数组转换为字符串数组并去除首尾空格
   */
  format(roles: string | string[]): string[] {
    if (typeof roles === "string") {
      return roles.split(",").map((role) => role.trim());
    } else {
      return roles.map((role) => role.trim());
    }
  }

  /**
   * 清空当前实例的所有角色
   */
  setClear(): void {
    this._roles = [];
  }
}
