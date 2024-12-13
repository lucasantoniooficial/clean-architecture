import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import InputFindCustomerDto from "./find.customer.dto";
import OutputFindCustomerDto from "./find.customer.dto";

export default class FindCustomerUseCase {
    private customerRepository: CustomerRepositoryInterface;

    constructor(customerRepository: CustomerRepositoryInterface) {
        this.customerRepository = customerRepository;
    }

    async execute(input: InputFindCustomerDto): Promise<OutputFindCustomerDto> {
        const customer = await this.customerRepository.find(input.id);

        if (!customer) {
            throw new Error("Customer not found");
        }

        return {
            id: customer.id,
            name: customer.name,
            address: {
                street: customer.Address.street,
                city: customer.Address.city,
                state: customer.Address.state,
                zip: customer.Address.zip,
            }
        }
    }
}