/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { UserService } from "../user.service";
import { UserCreateInput } from "./UserCreateInput";
import { User } from "./User";
import { UserFindManyArgs } from "./UserFindManyArgs";
import { UserWhereUniqueInput } from "./UserWhereUniqueInput";
import { UserUpdateInput } from "./UserUpdateInput";
import { GroupMemberFindManyArgs } from "../../groupMember/base/GroupMemberFindManyArgs";
import { GroupMember } from "../../groupMember/base/GroupMember";
import { GroupMemberWhereUniqueInput } from "../../groupMember/base/GroupMemberWhereUniqueInput";
import { WebSocketFindManyArgs } from "../../webSocket/base/WebSocketFindManyArgs";
import { WebSocket } from "../../webSocket/base/WebSocket";
import { WebSocketWhereUniqueInput } from "../../webSocket/base/WebSocketWhereUniqueInput";
import { NotificationFindManyArgs } from "../../notification/base/NotificationFindManyArgs";
import { Notification } from "../../notification/base/Notification";
import { NotificationWhereUniqueInput } from "../../notification/base/NotificationWhereUniqueInput";

export class UserControllerBase {
  constructor(protected readonly service: UserService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: User })
  async createUser(@common.Body() data: UserCreateInput): Promise<User> {
    return await this.service.createUser({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
        isOnline: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [User] })
  @ApiNestedQuery(UserFindManyArgs)
  async users(@common.Req() request: Request): Promise<User[]> {
    const args = plainToClass(UserFindManyArgs, request.query);
    return this.service.users({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
        isOnline: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async user(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    const result = await this.service.user({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        firstName: true,
        lastName: true,
        username: true,
        email: true,
        roles: true,
        isOnline: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateUser(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() data: UserUpdateInput
  ): Promise<User | null> {
    try {
      return await this.service.updateUser({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          roles: true,
          isOnline: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: User })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteUser(
    @common.Param() params: UserWhereUniqueInput
  ): Promise<User | null> {
    try {
      return await this.service.deleteUser({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          firstName: true,
          lastName: true,
          username: true,
          email: true,
          roles: true,
          isOnline: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/groupMembers")
  @ApiNestedQuery(GroupMemberFindManyArgs)
  async findGroupMembers(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<GroupMember[]> {
    const query = plainToClass(GroupMemberFindManyArgs, request.query);
    const results = await this.service.findGroupMembers(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isAdmin: true,

        user: {
          select: {
            id: true,
          },
        },

        group: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/groupMembers")
  async connectGroupMembers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: GroupMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      groupMembers: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/groupMembers")
  async updateGroupMembers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: GroupMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      groupMembers: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/groupMembers")
  async disconnectGroupMembers(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: GroupMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      groupMembers: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/webSockets")
  @ApiNestedQuery(WebSocketFindManyArgs)
  async findWebSockets(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<WebSocket[]> {
    const query = plainToClass(WebSocketFindManyArgs, request.query);
    const results = await this.service.findWebSockets(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        sessionId: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/webSockets")
  async connectWebSockets(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: WebSocketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webSockets: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/webSockets")
  async updateWebSockets(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: WebSocketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webSockets: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/webSockets")
  async disconnectWebSockets(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: WebSocketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      webSockets: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/notifications")
  @ApiNestedQuery(NotificationFindManyArgs)
  async findNotifications(
    @common.Req() request: Request,
    @common.Param() params: UserWhereUniqueInput
  ): Promise<Notification[]> {
    const query = plainToClass(NotificationFindManyArgs, request.query);
    const results = await this.service.findNotifications(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        isRead: true,

        message: {
          select: {
            id: true,
          },
        },

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/notifications")
  async connectNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        connect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/notifications")
  async updateNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        set: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/notifications")
  async disconnectNotifications(
    @common.Param() params: UserWhereUniqueInput,
    @common.Body() body: NotificationWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      notifications: {
        disconnect: body,
      },
    };
    await this.service.updateUser({
      where: params,
      data,
      select: { id: true },
    });
  }
}
