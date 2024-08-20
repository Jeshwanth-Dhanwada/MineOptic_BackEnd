import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
        } from "typeorm";
        
        @Entity()
        export class tipperhistory extends BaseEntity {
          @PrimaryGeneratedColumn()
          id: number;

          @Column()
          inserted_time: Date;

          @Column({type:'bigint',nullable:true})
          hex_sno: number;

          @Column({type:'float',nullable:true})
          altitude: number;

          @Column({nullable:true})
          direction: string;

          @Column({nullable:true})
          engineStatus: string;

          @Column({nullable:true})
          lat_direction: string;

          @Column({type:'float',nullable:true})
          latitude: Date;

          @Column({nullable:true})
          location_id: string;

          @Column({nullable:true})
          long_direction: string;

          @Column({type:'float',nullable:true})
          longitude: number;

          @Column({nullable:true})
          operator_id: string;

          @Column({nullable:true})
          shift_id: string;

          @Column({nullable:true})
          site_id: string;

          @Column({nullable:true})
          speed: string;

          @Column({nullable:true})
          state: string;

          @Column({nullable:true})
          tipper_id: string;

          @Column({nullable:true})
          tipper_status: string;

          @Column({nullable:true})
          trackTime: Date;

          @Column({nullable:true})
          LD_Excavator: string;

          @Column({type:'float',nullable:true})
          odometer: number;

          @Column({nullable:true})
          power_indicator: string;

          @Column({nullable:true})
          tipper_history_duration: number;

          @Column({nullable:true})
          vibration_value: string;

          @Column({nullable:true})
          Vibration_Threshold_Indicator: string;

          @Column({nullable:true})
          vibration_diff: string;

          @Column({nullable:true})
          reverse_indicator: string;

          @Column({type:'float',nullable:true})
          accelerator_position: number;

          @Column({nullable:true})
          alternator: string;

          @Column({type:'float',nullable:true})
          coolant_level: number;

          @Column({nullable:true})
          coolant_temperature: number;

          @Column({type:'float',nullable:true})
          engine_rpm: number;

          @Column({type:'float',nullable:true})
          fuel_level: number;

          @Column({nullable:true})
          hoist: string;

          @Column({nullable:true})
          ios: string;

          @Column({nullable:true})
          pto: string;

          @Column({type:'float',nullable:true})
          total_fuel_consumed: number;

          @Column({type:'float',nullable:true})
          total_hours: number;

          @Column({type:'float',nullable:true})
          vehicle_speed: number;

          @Column({type:'float',nullable:true})
          odometer_diff: number;

          @Column({type:'float',nullable:true})
          total_fuel_consumed_diff: number;

          @Column({type:'float',nullable:true})
          total_hours_diff: number;

          @Column()
          Exc1: string;

          @Column()
          Exc1_RSSI: number;

          @Column()
          Exc1_Distance: number;

          @Column()
          Exc2: string;

          @Column()
          Exc2_RSSI: number;

          @Column()
          Exc2_Distance: number;

          @Column()
          Exc3: string;

          @Column()
          Exc3_RSSI: number;

          @Column()
          Exc3_Distance: number;

          @Column()
          trip_no: number;

          @Column({ nullable: true })
          branchId: string;

        }