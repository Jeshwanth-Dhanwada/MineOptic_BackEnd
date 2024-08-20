import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class excavatorStatehistory extends BaseEntity {
          @PrimaryGeneratedColumn()
          id: number;
        
          @Column({nullable:true})
          state_date: Date;

          @Column({nullable:true})
          latitude: string;

          @Column({nullable:true})
          longitude: string;
        
          @Column({nullable:true})
          latitude_direction: string;

          @Column({nullable:true})
          longitude_direction: string;

          @Column({nullable:true})
          shift_id: number;

          @Column({nullable:true})
          pdate: Date;

          @Column({nullable:true})
          excavator_id: string;

          @Column({nullable:true})
          operator_id: string;

          @Column({nullable:true})
          location_id: string;

          @Column({nullable:true})
          new_state: string;

          @Column({nullable:true})
          state_duration: string;

          @Column({nullable:true})
          seen_by_tipper_id: string;

          @Column({nullable:true})
          trip_no: number;

          @Column({nullable:true})
          power_indicator: number;

          @Column({nullable:true})
          RFID_indicator: number;

          @Column({nullable:true})
          engine_indicator: number;

          @Column({nullable:true})
          ignition_value: string;

          @Column({ nullable: true })
          userId: string;

          @Column({ nullable: true })
          branchId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        }
        