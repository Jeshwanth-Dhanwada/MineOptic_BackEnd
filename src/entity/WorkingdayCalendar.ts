import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
        } from "typeorm";
        
        @Entity()
        export class WorkingDayCalendar extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          Id: number;

          @Column()
          StartTime: Date;
        
          @Column()
          EndTime: Date;
        
          @Column()
          Working: string;
        
        }
        