import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
          CreateDateColumn
        } from "typeorm";
        
        @Entity()
        export class excavatorhistory extends BaseEntity {
          @PrimaryGeneratedColumn()
          id: number;
        
          @Column({nullable:true})
          inserted_time: Date;
        
          @Column({type:'bigint'})
          hex_sno: number;

          @Column({nullable:true,type:'float'})
          altitude: number;

          @Column({nullable:true})
          direction: string;

          @Column({nullable:true})
          engineStatus: string;

          @Column({nullable:true})
          excavator_id: string;

          @Column({nullable:true})
          excavator_status: string;

          @Column({nullable:true})
          lat_direction: string;

          @Column({type: 'float'})
          latitude: number;

          @Column({nullable:true})
          location_id: number;

          @Column({nullable:true})
          long_direction: string;

          @Column({type: 'float'})
          longitude: number;

          @Column({nullable:true})
          operator_id: number;

          @Column({nullable:true})
          shift_id: number;

          @Column({nullable:true})
          site_id: number;

          @Column({nullable:true,type:'float'})
          speed: number;

          @Column({nullable:true})
          state: string;

          @Column({nullable:true})
          trackTime: Date;

          @Column({nullable:true})
          RFID_flag: string;

          @Column({nullable:true,type:'float'})
          odometer: number;

          @Column({nullable:true})
          power_indicator: string;

          @Column({nullable:true})
          satellite_no: number;

          @Column({nullable:true})
          seen_by_tipperid: string;

          @Column({nullable:true})
          ignition_change_flag: string;

          @Column({nullable:true})
          stored_data_flag: string;

          @Column({type:'float',nullable:true})
          ble_signal_strength: number;

          @Column({type:'float',nullable:true})
          distance: number;

          @Column({nullable:true})
          tipperState: string;

          @Column()
          History_Available: string;

          @Column()
          trip_no: number;

          @Column({ nullable: true })
          userId: string;

          @Column({ nullable: true })
          branchId: string;
        
          @CreateDateColumn()
          DateTime: Date;
        }
        