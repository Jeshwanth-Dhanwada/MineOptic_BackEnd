import {
          BaseEntity,
          Column,
          Entity,
          PrimaryGeneratedColumn,
        } from "typeorm";
        
        @Entity()
        export class location extends BaseEntity {
        
          @PrimaryGeneratedColumn()
          location_id: string;

          @Column()
          location_name: string;
        
          @Column()
          location_type: string;

          @Column()
          active: boolean;

          @Column()
          description: string;

          @Column()
          material_id: string;

          @Column()
          polygon: string;

          @Column()
          site_id: string;

          @Column()
          viewonly: string;

          @Column({ nullable: true })
          branchId: string;
        
        }
        