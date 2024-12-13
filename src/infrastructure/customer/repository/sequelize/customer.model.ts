import { Column, Model, PrimaryKey, Table, DataType } from "sequelize-typescript";

@Table({
    tableName: 'customers',
    timestamps: false,
})
export default class CustomerModel extends Model {

    @PrimaryKey
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare street: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare city: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare state: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    declare zipCode: string;
    
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
    })
    declare active: boolean;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    })
    declare rewardPoints: number;
}