import { expect, test } from "vitest";
import { Role } from "../src/index.ts";

test("Role类函数测试", () => {
  const role = new Role(["admin", "user"]);

  expect(role.getRoles()).toMatchObject(["admin", "user"]);
  expect(role.getRolesStr()).toBe("admin,user");

  expect(role.hasAccess("admin")).toBe(true);
  expect(role.hasAccess(["admin", "visitor"])).toBe(true);
  expect(role.hasAccess("visitor")).toBe(false);

  role.delRoles("admin");

  expect(role.getRoles()).toMatchObject(["user"]);
  expect(role.hasAccess("admin")).toBe(false);

  role.addRoles("super");

  expect(role.getRoles()).toMatchObject(["user", "super"]);
  expect(role.hasAccess("super")).toBe(true);
  expect(role.hasAccess(["admin"])).toBe(false);

  role.setClear();
  expect(role.getRoles()).toMatchObject([]);
});
