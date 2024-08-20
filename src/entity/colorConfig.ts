import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class ColorConfiguration extends BaseEntity {
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column()
          stateName: string;
        
          @Column()
          colorCode: string;
        
          @Column()
          branchId: string;

          @Column()
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        
        }
        