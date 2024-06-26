import { ApiProperty } from '@nestjs/swagger';
import { VoteableTypes, Votes } from '@prisma/client';

export class Vote implements Votes {
  @ApiProperty()
  id: number;

  @ApiProperty()
  is_upvoted: boolean;

  @ApiProperty()
  user_id: number;

  @ApiProperty()
  voteable_id: number;

  @ApiProperty()
  voteable_type: VoteableTypes;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  deleted_at: Date;
}
