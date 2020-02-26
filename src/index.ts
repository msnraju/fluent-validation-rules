import { AbstractValidator } from "./abstract-validator";

interface IOrder {
    number: string;
    amount?: number;
}

interface IAddress {
    address1: string;
    postcode: string;
}

export interface ICustomer {
    name: string;
    address?: IAddress;
    isCompany: boolean,
    noOfEmployees: number,
    orders?: Array<IOrder>;
}

export class CustomerValidator extends AbstractValidator<ICustomer> {
    constructor() {
        super();

        this.builder

            .ruleFor('Customer Name', x => x.name)                        
            .isNull()

            .ruleFor('Customer Name', x => x.name)
            .mustBe(this.validCustomerName)
            .withMessage('Customer Name should have a valid name.')

            .ruleFor('Address', x => x.address)
            .isNotNull()
            .withMessage('')

            .ruleFor('Customer Name', x => x.name)
            .hasLength(10, 50)
            .withMessage('Customer Name is not matching length requirements')
            
            .ruleFor('x', x => x.orders)
            .hasMaxLength(10)
                        
            .ruleFor('No. of Employees', x => x.noOfEmployees)
            .isEqualTo(10)
            .when(x => x.isCompany);

        this.builder.ruleForObject('Address', x => x.address)
            .ruleFor('Post Code', x => x.postcode)
            .isNotEmpty()

        this.builder.ruleForEach('Order', x => x.orders)
            .ruleFor('Amount', x => x.amount)
            .isGreaterThanOrEqualTo(100000)


    }

    private validCustomerName(value: string, customer: ICustomer): boolean {
        if (value.toUpperCase() == 'TEST')
            return true;

        return false;
    }
}

const customer: ICustomer = {
    name: 'All e Technologies Pvt. Ltd.',
    address: { address1: 'A1, Sec-58, Noida', postcode: '' },
    noOfEmployees: 42,
    isCompany: true,
    orders: [
        { number: 'O001', amount: 100 }
    ],
};

const validator = new CustomerValidator();
const result = validator.validate(customer);
console.log(JSON.stringify(result, null, 2));
