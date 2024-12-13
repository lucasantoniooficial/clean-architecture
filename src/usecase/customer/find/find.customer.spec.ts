import { Sequelize } from "sequelize-typescript";
import CustomerModel from "../../../infrastructure/customer/repository/sequelize/customer.model";
import CustomerRepository from "../../../infrastructure/customer/repository/sequelize/customer.repository";
import Customer from "../../../domain/customer/entity/customer";
import Address from "../../../domain/customer/value-object/address";
import InputFindCustomerDto from "./find.customer.dto";
import FindCustomerUseCase from "./find.customer.usecase";

describe("Test Find Customer Use case", () => {
    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: 'sqlite',
            storage: ':memory:',
            logging: false,
            sync: { force: true },
        });

        sequelize.addModels([CustomerModel])
        await sequelize.sync();
    })

    afterEach(async () => {
        await sequelize.close();
    });
    
    it("should find a customer", async () => {
        const customerRepository = new CustomerRepository();
        const usecase =  new FindCustomerUseCase(customerRepository);

        const customer = new Customer("1", "John Doe");
        const address = new Address("123 Main St", "Springfield", "IL", "62701");
        customer.changeAddress(address);
        await customerRepository.create(customer);

        const input = { id: "1" } as InputFindCustomerDto;

        const output = {
            id: "1",
            name: "John Doe",
            address: {
                street: "123 Main St",
                city: "Springfield",
                state: "IL",
                zip: "62701",
            }
        }

        const result = await usecase.execute(input);

        expect(result).toEqual(output);
    })
})