class Customer {
    constructor(public customerId: number, public name: string,
        public address: string, public credit: number,
        public status: boolean, public email: string, public phone: string,
        public remarks: string) { }

    toString() {
        let formattedMessage =
            `${this.customerId}, ${this.name}, ${this.address}, ${this.credit}` +
            `${this.status}, ${this.email}, ${this.phone}, ${this.remarks}`;

        return formattedMessage;
    }
}

export default Customer;
