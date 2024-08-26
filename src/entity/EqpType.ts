import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class EqpType extends BaseEntity {
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column({nullable:true})
          branchId: string;

          @Column({nullable:true})
          stateId: string;
        
          @Column({nullable:true})
          Description: string;

          @Column({nullable:true})
          equipmentType: string;
        
          @Column({nullable:true})
          stateCategory: string;

          @Column({nullable:true})
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        
        }
        