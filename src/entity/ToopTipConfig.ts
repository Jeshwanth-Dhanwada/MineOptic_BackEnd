import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class ToopTipConfiguration extends BaseEntity {
          @PrimaryGeneratedColumn()
          Id: number;
        
          @Column({nullable:true})
          Tcolumn: string;

          @Column({nullable:true})
          columnName: string;
        
          @Column({nullable:true})
          index: number;

          @Column({nullable:true})
          checkValue: boolean;
        
          @Column({nullable:true})
          branchId: string;

          @Column({nullable:true})
          userId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        
        }
        