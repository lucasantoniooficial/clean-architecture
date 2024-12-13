export default interface InputFindCustomerDto {
    id: string;
}

export default interface OutputFindCustomerDto {
    id: string;
    name: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
    };
}