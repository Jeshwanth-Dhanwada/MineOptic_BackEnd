import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn
        } from "typeorm";
        
        @Entity()
        export class tripDetails extends BaseEntity {
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
          location_id: string;

          @Column({nullable:true})
          pdate: Date;

          @Column({nullable:true})
          second_excavator_id: string;

          @Column({nullable:true})
          second_operator_id: string;

          @Column({nullable:true})
          shift_id: string;

          @Column({nullable:true})
          te_start_time: Date;

          @Column({nullable:true})
          tipper_id: string;

          @Column({nullable:true})
          tipper_trip_no: number;

          @Column({type:'float',nullable:true})
          trip_duration: number;

          @Column({nullable:true})
          trip_flag: string;

          @Column({nullable:true})
          trip_no: number;

          @Column({nullable:true})
          trip_time: Date;

          @Column({nullable:true})
          upload_file: string;

          @Column({nullable:true})
          material_id: string;

          @Column({type:'float',nullable:true})
          trip_distance: number;

          @Column({type:'float',nullable:true})
          odometer: number;

          @Column({type:'float',nullable:true})
          coolant_level: number;

          @Column({type:'float',nullable:true})
          fuel_level: number;

          @Column({type:'float',nullable:true})
          total_fuel_consumed: number;

          @Column({type:'float',nullable:true})
          total_hours: number;

          @Column({ nullable: true })
          branchId: string;

        }