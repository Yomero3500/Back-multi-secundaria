import { Table, Column, DataType, Model } from "sequelize-typescript";

@Table({
    tableName: "sensorData",
    timestamps: true
})
class LecturaModel extends Model{
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    })
    public id!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public tipo!: string
    
    @Column({
        type: DataType.DOUBLE,
        allowNull: false
    })
    public valor! : number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public correo_cliente!: string;
}

export default LecturaModel;