import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn
        } from "typeorm";
        
        @Entity()
        export class tipper_state_history extends BaseEntity {
          @PrimaryGeneratedColumn()
          id: number;

          @Column()
          inserted_time: Date;

          @Column({type:'bigint',nullable:true})
          hex_sno: number;

          @Column({nullable:true})
          driver_id: string;

          @Column({nullable:true})
          first_excavator_id: string;

          @Column({nullable:true})
          first_operator_id: string;

          @Column({nullable:true})
          fourth_excavator_id: string;

          @Column({nullable:true})
          fourth_operator_id: string;

          @Column({nullable:true})
          location_id: string;

          @Column({nullable:true})
          new_state: string;

          @Column({nullable:true})
          pdate: Date;

          @Column({nullable:true})
          second_excavator_id: string;

          @Column({nullable:true})
          second_operator_id: string;

          @Column({nullable:true})
          shift_id: string;

          @Column({nullable:true})
          state_date: Date;

          @Column({nullable:true})
          state_duration: string;

          @Column({nullable:true})
          third_excavator_id: string;

          @Column({nullable:true})
          third_operator_id: string;

          @Column({nullable:true})
          tipper_id: string;

          @Column({nullable:true})
          trip_no: number;

          @Column({type:'float',nullable:true})
          stateDistance: number;

          @Column({type:'float',nullable:true})
          odometer: number;

          @Column({nullable:true})
          tripFlag: number;

          @Column({type:'float',nullable:true})
          coolant_level: number;

          @Column({type:'float',nullable:true})
          fuel_level: number;

          @Column({type:'float',nullable:true})
          total_fuel_consumed: number;

          @Column({type:'float',nullable:true})
          total_hours: number;

          @Column({nullable:true})
          Exc1: string;

          @Column({nullable:true})
          Exc1_RSSI: number;

          @Column({nullable:true})
          Exc1_Distance: number;

          @Column({nullable:true})
          Exc2: string;

          @Column({nullable:true})
          Exc2_RSSI: number;

          @Column({nullable:true})
          Exc2_Distance: number;

          @Column({nullable:true})
          Exc3: string;

          @Column({nullable:true})
          Exc3_RSSI: number;

          @Column({nullable:true})
          Exc3_Distance: number;

          @Column({nullable:true})
          vibration_value: number;

        }