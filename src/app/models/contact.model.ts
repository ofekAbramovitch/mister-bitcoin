export class Contact {

    public _id?: string = ''
    constructor(
        public name: string = '',
        public email: string = '',
        public phone: string = '') {
    }

    setId?(id: string = 'r101') {
        this._id = id
    }
}

export interface ContactFilter {
    term: string
}
