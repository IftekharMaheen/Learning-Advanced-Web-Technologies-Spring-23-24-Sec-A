import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
//import { RepList } from './rep-list.entity';
import { RepList } from './rep-list.entity';

@Entity()
export class RepAppoitment {
    
    @PrimaryGeneratedColumn()
    rep_app_id: number;

    @Column()
    rep_id: number;

    @Column()
    doc_id: number;
    
    @Column()
    app_date: String;

    @Column('time')
    app_time: string;

    @Column({ default: ' ' })
    app_note: string;

    @Column({ default: 'confirmed' })
    app_status: string;

    @CreateDateColumn({ type: 'date' })
    app_created: string;

    @ManyToOne(() => RepList, list => list.appointments)
    list: RepList;
}