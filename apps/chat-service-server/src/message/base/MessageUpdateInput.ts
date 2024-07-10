/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from "class-validator";
import { GroupWhereUniqueInput } from "../../group/base/GroupWhereUniqueInput";
import { Type } from "class-transformer";
import { NotificationUpdateManyWithoutMessagesInput } from "./NotificationUpdateManyWithoutMessagesInput";

@InputType()
class MessageUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  sender?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isRead?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => GroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GroupWhereUniqueInput)
  @IsOptional()
  @Field(() => GroupWhereUniqueInput, {
    nullable: true,
  })
  group?: GroupWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => NotificationUpdateManyWithoutMessagesInput,
  })
  @ValidateNested()
  @Type(() => NotificationUpdateManyWithoutMessagesInput)
  @IsOptional()
  @Field(() => NotificationUpdateManyWithoutMessagesInput, {
    nullable: true,
  })
  notifications?: NotificationUpdateManyWithoutMessagesInput;
}

export { MessageUpdateInput as MessageUpdateInput };
