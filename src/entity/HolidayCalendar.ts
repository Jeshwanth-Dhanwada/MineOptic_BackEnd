import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
        } from "typeorm";
        
        @Entity()
        export class HolidayCalendar extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          Id: number;

          @Column()
          Date: Date;
        
          @Column()
          WeekDay: string;
        
          @Column()
          Occassion: string;

          @Column()
          Working: string;
        
        }
        